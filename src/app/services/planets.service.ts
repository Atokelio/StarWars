import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Planet } from '../interfaces/planet.interface';
import { PlanetInitial } from '../interfaces/planet-initial.interface';

@Injectable({providedIn: 'root'})
export class PlanetsService extends DefaultDataService<Planet> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator
  ) {
    super('Planets', http, httpUrlGenerator);
  }

  getAll(): Observable<Planet[]> {
    return super.getAll().pipe(
      delay(1500),
      map((res: any) => res.results),
      map((planets: PlanetInitial[]) => {
        return planets.map((planet: PlanetInitial, idx) => {
          return {
            id: idx + 1,
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population
          };
        });
      })
    );
  }
}
