import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyRoutingModule } from './formly-routing.module';
import { UserComponent } from './user/user.component';
import { ExampleComponent } from './example/example.component';
import { FormlyComponent } from './formly.component';
import { RouterModule } from '@angular/router';
import { CardsComponent } from '../shared/components/cards/cards.component';
import { CartComponent } from '../cart/cart.component';
import { NgRxExampleComponent } from '../ng-rx-example/ng-rx-example.component';



@NgModule({
  declarations: [
    FormlyComponent,
    ExampleComponent,
    UserComponent,
    CardsComponent,
    CartComponent,
    NgRxExampleComponent
  ],
  imports: [
    CommonModule,
    FormlyRoutingModule,
    RouterModule
  ],
})
export class Formly1Module { }
