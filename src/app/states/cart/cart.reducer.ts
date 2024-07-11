import { createReducer, on } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.interface';
import * as CartActions from './cart.action';

export interface CartState{
    products:IProduct[];
    TotalPrice?:number;
};
export const initialCartState : CartState = {
  products : []
};  
export const cartReducer = createReducer(
    initialCartState,
    on(CartActions.addToCart,(state,{product})=>{
        const updatedProduct = [...state.products,product] 
    return{
        ...state,
        products: updatedProduct
    }; 
  }),
  on(CartActions.incrementProduct, (state ,{ productId })=>{
    const updatedProduct = state.products.map((product)=> 
    product.id === productId
    ? {...product, quantoty:product.quantity+1} : product)
    return {
        ...state,
        products:updatedProduct
    }
  }),
  on(CartActions.decrementProduct, (state ,{ productId })=>{
    const updatedProduct = state.products.map((product)=> 
    product.id === productId
    ? {...product, quantoty:product.quantity+1} : product)
    return {
        ...state,
        products:updatedProduct   
    } 
  }),
  on(CartActions.removeItem , (state ,{ productId })=>{
    const updatedProduct = state.products.filter((product)=> 
    product.id ! == productId
    ? {...product, quantoty:product.quantity+1} : product)
    return {
        ...state, 
        products:updatedProduct   
    } 
  }),
  )