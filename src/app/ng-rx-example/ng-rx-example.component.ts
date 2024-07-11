import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.interface';
import { ProductApiServiceService } from '../shared/service/product-api-service.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';

@Component({
  selector: 'app-ng-rx-example',
  templateUrl: './ng-rx-example.component.html',
  styleUrls: ['./ng-rx-example.component.scss']
})
export class NgRxExampleComponent implements OnInit{
  
  products = this.productApi.getProducts() as Observable<IProduct[]>;
  constructor(
    private productApi :ProductApiServiceService,
    private store:Store<{cart:{products: IProduct[]}}> ){}
  ngOnInit(): void {
  }
  addItemToCart(product:IProduct){
     this.store.dispatch(addToCart({product}))
  }
}
