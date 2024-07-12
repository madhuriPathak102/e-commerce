import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/models/product.interface";

export const loadProduct = createAction('[Product Component] loadProduct');
export const loadProductSuccess = createAction('[Product Component] loadProductSuccess',props<{Products:IProduct[]}>());
export const loadProductFail = createAction('[Product Component] loadProductFail',props<{errorMessage: string}>());