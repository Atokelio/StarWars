import { createReducer, on } from '@ngrx/store';
import { PlanetsActions } from '../actions/planets';
import { Planet } from '../../../interfaces/planet.interface';

export const planetsFeatureKey = 'planetsList';

export interface PlanetsState {
  planets: Planet[];
  loading: boolean;
  error: string;
  planetsSelected: number[];
}

export const initialState: PlanetsState = {
  planets: [],
  loading: false,
  error: '',
  planetsSelected: []
};

export const planetsReducer = createReducer(
  initialState,
  on(PlanetsActions.planetsLoaded, (state, action) => ({...state, planets: action.planets})),
  on(PlanetsActions.planetsLoading, (state, action) => ({...state, loading: action.loading})),
  on(PlanetsActions.planetsError, (state, action) => ({...state, error: action.message})),
  on(PlanetsActions.planetsToggle, (state, action) => {
      let ids = [...state.planetsSelected];
      if (ids.includes(action.id)) {
        ids = ids.filter(planetId => planetId !== action.id);
      } else {
        ids.push(action.id);
      }
      return {...state, planetsSelected: ids};
    }
  )
);
