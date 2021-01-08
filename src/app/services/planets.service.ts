import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, pluck} from 'rxjs/operators';
import {Planet} from '../interfaces/planet.interface';

@Injectable({
  providedIn: 'root'
})

export class PlanetsService {
  planets$: Observable<Planet[]>;
  planets: Planet[] = [];
  wishlist: string[] = [];

  constructor(private http: HttpClient) {
  }

  fetchPlanets(): void {
    this.planets$ = this.http.get(environment.planetsURL)
      .pipe(delay(1500))
      .pipe(pluck('results'));
  }

  togglePlanet(planet: Planet): void {
    planet.inList = !planet.inList;
    const inList = this.wishlist.includes(planet.name);

    if (inList) {
      this.wishlist.forEach((item, index) => {
        if (planet.name === item) {
          this.wishlist.splice(index, 1);
        }
      });
    } else {
      this.wishlist.push(planet.name);
    }
  }
}
