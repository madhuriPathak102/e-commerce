import { CartState } from "./cart/cart.reducer";
import { ProductState } from "./products/product.reducer";

export interface AppState{
    cart:CartState,
    product: ProductState
}
