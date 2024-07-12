import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductActions from './product.action';
import { ProductApiServiceService } from "src/app/shared/service/product-api-service.service";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class ProductEffect{
    constructor(private api:ProductApiServiceService, private http:HttpClient,private action$:Actions){}
    loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.loadProduct),
      switchMap(() =>
        this.api.getProducts().pipe(
          map((res) => ProductActions.loadProductSuccess({ Products: res })),
          catchError((error: { message: string }) =>
            of(
              ProductActions.loadProductFail({
                errorMessage: 'Fail to load products'+error,
              })
            )
          )
        )
      )
    )
  );
}