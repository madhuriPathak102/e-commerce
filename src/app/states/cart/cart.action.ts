import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/models/product.interface";

export const addToCart = createAction('[Cart Component] AddToCart',props<{product:IProduct}>());
export const incrementProduct = createAction('[Cart Component] incrementProduct',props<{productId:number}>());
export const decrementProduct = createAction('[Cart Component] decrementProduct',props<{productId:number}>());
export const removeItem = createAction('[Cart Component] removeItem',props<{productId:number}>()); 