import { createReducer, on } from "@ngrx/store";
import { IProduct } from "src/app/models/product.interface";
import * as ProductActions from './product.action'

export interface ProductState{
    Products:IProduct[];
    error:string | null
}
export const initalProductState: ProductState = {
    Products: [],
    error: null
}
export const ProductReducer = createReducer(
    initalProductState,
    on(ProductActions.loadProductSuccess,(state, {Products}) =>({
        ...state,
        Products,
        error: null
    })),
    on(ProductActions.loadProductFail,(state,{errorMessage})=>({
        ...state,
        error:errorMessage,
    }))
    );