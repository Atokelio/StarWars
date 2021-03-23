import { createAction, props } from '@ngrx/store';
import { Planet } from '../../interfaces/planet.interface';

export const loadPlanets = createAction(
  '[Planets] Load'
);

export interface LoadPlanetsParams {
  planets: Planet[];
}

export interface ErrorPlanetsParams {
  message: string;
}

export interface LoadingPlanetsParams {
  loading: boolean;
}

export const planetsLoaded = createAction(
  '[Planets] Loaded',
  props<LoadPlanetsParams>()
);

export const planetsError = createAction(
  '[Planets] Loaded Error',
  props<ErrorPlanetsParams>()
);

export const planetsLoading = createAction(
  '[Planets] Loading',
  props<LoadingPlanetsParams>()
);

