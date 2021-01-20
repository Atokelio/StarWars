import {InjectionToken, Provider} from '@angular/core';
import {Observable} from 'rxjs';
import {Planet} from '../../interfaces/planet.interface';
import {PlanetsService} from '../../services/planets.service';
import {HttpErrorResponse} from '@angular/common/http';

export const PLANETS: InjectionToken<Observable<Planet[]>> = new InjectionToken<Observable<Planet[]>>(
  'planets'
);

export const planetsProvider: Provider = {
  provide: PLANETS,
  useFactory: (planetsService: PlanetsService) => planetsService.planets$.asObservable(),
  deps: [PlanetsService]
};

export const PLANETS_LOADING: InjectionToken<Observable<boolean>> = new InjectionToken<Observable<boolean>>(
  'planetsLoading'
);

export const planetsLoadingProvider: Provider = {
  provide: PLANETS_LOADING,
  useFactory: (planetsService: PlanetsService) => planetsService.loading$.asObservable(),
  deps: [PlanetsService]
};

export const PLANETS_ERROR: InjectionToken<Observable<HttpErrorResponse>> = new InjectionToken<Observable<HttpErrorResponse>>(
  'planetsError'
);

export const planetsErrorProvider: Provider = {
  provide: PLANETS_ERROR,
  useFactory: (planetsService: PlanetsService) => planetsService.error$.asObservable(),
  deps: [PlanetsService]
};
