import { Component } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCartProducts } from '../states/cart/cart.selector';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss']
})
export class FormlyComponent {
  products!: Observable<IProduct[]>
  constructor(private store: Store<AppState>){
    this.products = this.store.select(selectCartProducts)
  }
}
