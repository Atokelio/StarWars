import { createAction, props } from '@ngrx/store';
import { Planet } from '../../../../interfaces/planet.interface';

export interface LoadPlanetsParams {
  planets: Planet[];
}

export interface ErrorPlanetsParams {
  message: string;
}

export interface LoadingPlanetsParams {
  loading: boolean;
}

export interface TogglePlanetsParams {
  id: number;
}

export const loadPlanets = createAction(
  '[Planets] Load'
);

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

export const planetsToggle = createAction(
  '[Planets] Toggle',
  props<TogglePlanetsParams>()
);


