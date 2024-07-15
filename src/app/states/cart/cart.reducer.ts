import { createReducer, on } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.interface';
import * as CartActions from './cart.action';

export interface CartState{
    Products:IProduct[];
    TotalPrice:number;
};
export const initialCartState : CartState = {
  Products : [],
  TotalPrice: 0
};  
export function calculateTotalPrice(products:IProduct[]){
  return products.reduce((total,product) => total + (product.price * product.quantity),0 )
}
export const cartReducer = createReducer(
    initialCartState,
    on(CartActions.addToCart,(state,{product})=>{
        const updatedProduct = [...state.Products,product] 
    return{
        ...state,
        Products: updatedProduct,
        TotalPrice:calculateTotalPrice(updatedProduct)
    }; 
  }),
  on(CartActions.incrementProduct, (state ,{ productId })=>{
    const updatedProduct = state.Products.map((product)=> 
    product.id === productId
    ? {...product, quantity:product.quantity+1} : product)
    return {
        ...state,
        Products:updatedProduct,
        TotalPrice:calculateTotalPrice(updatedProduct)
    }
  }),
  on(CartActions.decrementProduct, (state ,{ productId })=>{
    const updatedProduct = state.Products.map((product)=> 
    product.id === productId
    ? {...product, quantity:product.quantity-1} : product)
    return {
        ...state,
        Products:updatedProduct,
        TotalPrice:calculateTotalPrice(updatedProduct)  
    } 
  }),
  on(CartActions.removeItem , (state ,{ productId })=>{
    const updatedProduct = state.Products.filter((product)=> 
    product.id !== productId
    );
    return {
        ...state, 
        Products:updatedProduct ,
        TotalPrice:calculateTotalPrice(updatedProduct) 
    } 
  }),
  )