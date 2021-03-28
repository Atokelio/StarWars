import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, pluck } from 'rxjs/operators';
import { Planet } from '../interfaces/planet.interface';
import { PlanetInitial } from '../interfaces/planet-initial.interface';

@Injectable({
  providedIn: 'root'
})

export class PlanetsService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getPlanets(): Observable<PlanetInitial[]> {
    return this.http.get(environment.planetsURL).pipe(
      delay(1500),
      pluck('results')
    );
  }

  decoratePlanets(): Observable<Planet[]> {
    return this.getPlanets().pipe(
      map((planets: PlanetInitial[]) => {
        return planets.map((planet: PlanetInitial, idx) => {
          return {
            id: idx + 1,
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population
          };
        });
      }));
  }
}
