import { InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../../interfaces/planet.interface';
import { PlanetsService } from '../../services/planets.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { planetsFeatureKey } from '../../store/reducers/planets.reducer';
import { map } from 'rxjs/operators';

export const PLANETS: InjectionToken<Observable<Planet[]>> = new InjectionToken<Observable<Planet[]>>(
  'planets'
);

export const planetsProvider: Provider = {
  provide: PLANETS,
  useFactory: (store: Store<AppState>) => store.select(planetsFeatureKey).pipe(map(state => state.planets)),
  deps: [Store]
};

export const PLANETS_LOADING: InjectionToken<Observable<boolean>> = new InjectionToken<Observable<boolean>>(
  'planetsLoading'
);

export const planetsLoadingProvider: Provider = {
  provide: PLANETS_LOADING,
  useFactory: (store: Store<AppState>) => store.select(planetsFeatureKey).pipe(map(state => state.loading)),
  deps: [Store]
};

export const PLANETS_ERROR: InjectionToken<Observable<HttpErrorResponse>> = new InjectionToken<Observable<HttpErrorResponse>>(
  'planetsError'
);

export const planetsErrorProvider: Provider = {
  provide: PLANETS_ERROR,
  useFactory: (store: Store<AppState>) => store.select(planetsFeatureKey).pipe(map(state => state.error)),
  deps: [Store]
};
