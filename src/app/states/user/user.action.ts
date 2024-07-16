import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/models/product.interface";
import { User } from "src/app/second/models/user";

export const userListRequest = createAction('[User List Component] userListRequest',props<{product:User}>());
export const incrementProduct = createAction('[Cart Component] incrementProduct',props<{productId:number}>());
export const decrementProduct = createAction('[Cart Component] decrementProduct',props<{productId:number}>());
export const removeItem = createAction('[Cart Component] removeItem',props<{productId:number}>()); 