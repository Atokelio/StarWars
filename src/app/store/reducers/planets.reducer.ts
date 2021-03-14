import { createReducer, on } from '@ngrx/store';
import { PlanetsActions } from '../actions';
import { Planet } from '../../interfaces/planet.interface';

export const planetsFeatureKey = 'planetsList';

export interface PlanetsState {
  planets: Planet[];
}

export const initialState: PlanetsState = {
  planets: []
};

export const planetsReducer = createReducer(
  initialState,
  on(PlanetsActions.planetsLoaded, (state, action) => ({...state, planets: action.planets}))
);
