import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormlyExampleComponent } from './formly-example/formly-example.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'formlyExample',component:FormlyExampleComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'formly',
    loadChildren:()=> import('./formly/formly.module').then(m=> m.Formly1Module)
  },
  // {
  //   path:'second',
  //   loadChildren:()=> import('./second/ng-rx-second.module').then((m) => m.NgRxSecondModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
