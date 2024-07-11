import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IProduct } from 'src/app/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductApiServiceService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
    .pipe(
      map(((products)=>{
        return products.map((product)=>{
          return {...product,quantity:1   }
        })
      }))
    )
  }
}
