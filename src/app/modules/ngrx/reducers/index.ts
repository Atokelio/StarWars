import { ActionReducerMap } from '@ngrx/store';
import { planetsFeatureKey, planetsReducer, PlanetsState } from './planets.reducer';
import { wishListFeatureKey, wishListReducer, WishListState } from './wish-list.reducer';

export interface AppState {
  [planetsFeatureKey]: PlanetsState;
  [wishListFeatureKey]: WishListState;
}

export const reducers: ActionReducerMap<AppState> = {
  [planetsFeatureKey]: planetsReducer,
  [wishListFeatureKey]: wishListReducer
};
