import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormlyExampleComponent } from './formly-example/formly-example.component';
import { NgRxExampleComponent } from './ng-rx-example/ng-rx-example.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'formlyExample',component:FormlyExampleComponent
  },
  {
    path:'ngrx',component:NgRxExampleComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'formly',
    loadChildren:()=> import('./formly/formly.module').then(m=> m.FormlyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
