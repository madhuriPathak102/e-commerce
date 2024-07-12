 import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CartState } from './cart.reducer';

//  export const selectCartState = (state: AppState) => state.cart;
 export const selectCartState = (state: AppState) => {
   console.log('Cart State:', state.cart);
   return state.cart;
};

 export const selectCartProducts = createSelector(
    selectCartState,
    (state:CartState) => state.Products
 );
 export const selectTotal = createSelector(
    selectCartState,
    (state:CartState) => state.TotalPrice
 );