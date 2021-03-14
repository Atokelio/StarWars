import { createAction, props } from '@ngrx/store';
import { Planet } from '../../interfaces/planet.interface';

export const loadPlanets = createAction(
  '[Planets] Load'
);

export interface LoadPlanetsParams {
  planets: Planet[];
}

export const planetsLoaded = createAction(
  '[Planets] Loaded',
  props<LoadPlanetsParams>()
);

export const planetsError = createAction(
  '[Planets] Loaded Error',
  props<any>()
);
