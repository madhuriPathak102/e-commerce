import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormlyComponent } from './formly.component';
import { ExampleComponent } from './example/example.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',component:FormlyComponent
  },
  {
    path:'example',component:ExampleComponent
  },
  {
    path:'user',component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormlyRoutingModule { }
