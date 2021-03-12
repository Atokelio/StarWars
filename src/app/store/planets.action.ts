import { Action } from '@ngrx/store';
import { Planet } from '../interfaces/planet.interface';

// LoadEntity <= Effect
// EntityLoaded <= Reduser
// EntityError <= Reduser

export class LoadPlanets implements Action {
  readonly type = 'LOAD_PLANETS';

  constructor(public payload: Planet[]) {
  }
}

export class PlanetsLoaded implements Action {
  readonly type = 'PLANETS_LOADED';
}

export class PlanetsError implements Action {
  readonly type = 'PLANETS_ERROR';
}

export type PlanetsActions = LoadPlanets | PlanetsLoaded | PlanetsError;
