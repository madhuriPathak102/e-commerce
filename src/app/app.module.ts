import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainCarouselComponent } from './home/main-carousel/main-carousel.component';
import { HomeProductCardComponent } from './home/home-product-card/home-product-card.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { FormlyExampleComponent } from './formly-example/formly-example.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule ,FormlyFieldConfig} from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './states/cart/cart.reducer';
import { ProductReducer } from './states/products/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './states/products/product.effect';
import { NgRxSecondModule } from './second/ng-rx-second.module';
import { Formly1Module } from './formly/formly.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from './states/user/reducer';
import { environment } from 'src/environments/environment';

export function minLengthValidationMessage(error: any, field: FormlyFieldConfig) {
  return `Should have atleast ${field.props?.minLength} characters`;
}

export function maxLengthValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.props?.maxLength} characters`;
}

export function minValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be more than ${field.props?.min}`;
}

export function maxValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.props?.max}`;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCarouselComponent,
    HomeProductCardComponent,
    ProductSliderComponent,
    FormlyExampleComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgRxSecondModule,
    ReactiveFormsModule,
    Formly1Module,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minLength', message: minLengthValidationMessage },
        { name: 'maxLength', message: maxLengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ],
    }),
    FormlyBootstrapModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreModule.forRoot(rootReducer,({ cart:cartReducer, product:ProductReducer})),
    EffectsModule.forRoot(ProductEffect),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
