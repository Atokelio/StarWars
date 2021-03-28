import { createReducer, on } from '@ngrx/store';
import { WishListActions } from '../actions/wish-list';

export const wishListFeatureKey = 'wishList';

export interface WishListState {
  wishList: string[];
}

export const initialState: WishListState = {
  wishList: []
};

export const wishListReducer = createReducer(
  initialState,
  on(WishListActions.wishListToggle, (state, action) => {
      let wishList = [...state.wishList];
      if (wishList.includes(action.name)) {
        wishList = wishList.filter(planetName => planetName !== action.name);
      } else {
        wishList.push(action.name);
      }
      return {...state, wishList};
    },
  )
);

