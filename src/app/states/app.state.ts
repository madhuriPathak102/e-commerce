import { CartState } from "./cart/cart.reducer";
import { ProductState } from "./products/product.reducer";
import { RootReducerState } from "./user/reducer/index";

export interface AppState{
    cart:CartState,
    product: ProductState,
}
