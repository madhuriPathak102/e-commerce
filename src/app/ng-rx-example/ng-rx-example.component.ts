import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.interface';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';
import * as ProductActions from '../states/products/product.action';
import * as ProductSelectors from '../states/products/product.selector';

@Component({
  selector: 'app-ng-rx-example',
  templateUrl: './ng-rx-example.component.html',
  styleUrls: ['./ng-rx-example.component.scss']
})
export class NgRxExampleComponent implements OnInit{
  
  products$!: Observable<IProduct[]>;
  error$!: Observable<String | null>
  constructor(
    private store:Store<{cart:{products: IProduct[]}}> ){
      this.store.dispatch(ProductActions.loadProduct());
      this.products$ = this.store.select(ProductSelectors.selectAllProducts);
      this.error$ = this.store.select(ProductSelectors.selectProductError);
    }
  ngOnInit(): void {
  }
  addItemToCart(product:IProduct){
     this.store.dispatch(addToCart({product}))
  }
}
