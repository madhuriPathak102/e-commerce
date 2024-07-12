import { Component, OnInit, inject } from '@angular/core';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCartProducts, selectTotal } from '../states/cart/cart.selector';
import { decrementProduct, incrementProduct, removeItem } from '../states/cart/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartItems$ = this.store.select(selectCartProducts);
  totalPrice$= this.store.select(selectTotal);
  constructor(private store:Store<AppState>){
    this.store.select(state => state).subscribe(console.log);
  }
  ngOnInit(): void {
  }
  remove(productId:number){
  this.store.dispatch(removeItem({productId}));
  }
  increment(productId:number){
    this.store.dispatch(incrementProduct({productId}));
    }
  decriment(productId:number){
      this.store.dispatch(decrementProduct({productId}));
      }

}
