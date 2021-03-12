import { Action } from '@ngrx/store';
import { PlanetsActions } from './planets.action';
import { Planet } from '../interfaces/planet.interface';

export const initialState = {
    planets: []
  }
;

export function PlanetsReducer(state = initialState, action: PlanetsActions) {
  switch (action.type) {
    case 'LOAD_PLANETS':
      return {
        ...state,
        planets: [...action.payload]
      };
    default:
      return state;
  }
}
