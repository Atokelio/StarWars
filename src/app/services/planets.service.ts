import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, delay, pluck, tap} from 'rxjs/operators';
import {Planet} from '../interfaces/planet.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { LoadPlanets } from '../store/planets.action';

@Injectable({
  providedIn: 'root'
})

export class PlanetsService {
  wishlist$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  planets$: BehaviorSubject<Planet[]> = new BehaviorSubject<Planet[]>([]);
  error$: BehaviorSubject<HttpErrorResponse> = new BehaviorSubject<HttpErrorResponse>({} as HttpErrorResponse);

  constructor(
    private readonly http: HttpClient,
    private readonly store: Store<AppState>
    ) {
  }

  fetchPlanets(): void {
    this.loading$.next(true);

    this.getPlanets().pipe(
      tap(() => this.loading$.next(false)),
      catchError((err: any) => {
        this.error$.next(err);
        this.loading$.next(false);
        return of([]);
      })
    ).subscribe(
      (planets: Planet[]) => {
        this.store.dispatch(new LoadPlanets(planets));
      }
    );
  }

  getPlanets(): Observable<Planet[]> {
    return this.http.get(environment.planetsURL)
      .pipe(delay(1500))
      .pipe(pluck('results'));
  }

  togglePlanet(planet: Planet): void {
    const wishlist = [...this.wishlist$.value];
    const inList = wishlist.includes(planet.name);
    planet.inList = !planet.inList;

    if (inList) {
      wishlist.forEach((item, index) => {
        if (planet.name === item) {
          wishlist.splice(index, 1);
        }
      });
    } else {
      wishlist.push(planet.name);
    }

    this.wishlist$.next(wishlist);
  }
}
