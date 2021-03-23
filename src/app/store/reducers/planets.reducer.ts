import { createReducer, on } from '@ngrx/store';
import { PlanetsActions } from '../actions';
import { Planet } from '../../interfaces/planet.interface';

export const planetsFeatureKey = 'planetsList';

export interface PlanetsState {
  planets: Planet[];
  loading: boolean;
  error: string;
}

export const initialState: PlanetsState = {
  planets: [],
  loading: false,
  error: ''
};

export const planetsReducer = createReducer(
  initialState,
  on(PlanetsActions.planetsLoaded, (state, action) => ({...state, planets: action.planets})),
  on(PlanetsActions.planetsLoading, (state, action) => ({...state, loading: action.loading})),
  on(PlanetsActions.planetsError, (state, action) => ({...state, error: action.message}))
);