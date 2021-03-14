import { ActionReducerMap } from '@ngrx/store';
import { planetsFeatureKey, planetsReducer, PlanetsState } from './planets.reducer';

export interface AppState {
  [planetsFeatureKey]: PlanetsState;
}

export const reducers: ActionReducerMap<AppState> = {
  [planetsFeatureKey]: planetsReducer
};
