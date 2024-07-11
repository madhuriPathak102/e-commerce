import { Component, OnInit } from '@angular/core';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCartProducts } from '../states/cart/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartItems = this.store.select(selectCartProducts)
  constructor(private store:Store<AppState>){}
  ngOnInit(): void {
    console.log('cartItems',this.cartItems);
    
  }

}
