import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {delay, pluck} from 'rxjs/operators';
import {Planet} from '../interfaces/planet.interface';

@Injectable({
  providedIn: 'root'
})

export class PlanetsService {
  wishlist$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(
    private readonly http: HttpClient
    ) {
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
