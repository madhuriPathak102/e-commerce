import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormlyExampleComponent } from './formly-example/formly-example.component';

const routes: Routes = [
  {
    path:'formlyExample',component:FormlyExampleComponent
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
