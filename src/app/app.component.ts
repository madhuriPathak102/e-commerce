import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './models/product.interface';
import { AppState } from './states/app.state';
import { Store } from '@ngrx/store';
import { selectCartProducts } from './states/cart/cart.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommercefrontend';
  products!: Observable<IProduct[]>
  constructor(private store: Store<AppState>){
    this.products = this.store.select(selectCartProducts)
  }
}
