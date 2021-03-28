import { createAction, props } from '@ngrx/store';

export interface ToggleWishListParams {
  name: string;
}

export const wishListToggle = createAction(
  '[WishList] Toggle',
  props<ToggleWishListParams>()
);
