import {InjectionToken, Provider} from '@angular/core';
import {Observable} from 'rxjs';
import {Planet} from '../../interfaces/planet.interface';
import {PlanetsService} from '../../services/planets.service';

export const PLANETS: InjectionToken<Observable<Planet[]>> = new InjectionToken<Observable<Planet[]>>(
  'Planets'
);

export const planetsProvider: Provider = {
  provide: PLANETS,
  useFactory: (planetsService: PlanetsService) => planetsService.planets$,
  deps: [PlanetsService]
};
