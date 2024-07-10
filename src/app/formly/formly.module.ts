import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyRoutingModule } from './formly-routing.module';
import { UserComponent } from './user/user.component';
import { ExampleComponent } from './example/example.component';
import { FormlyComponent } from './formly.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormlyComponent,
    ExampleComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormlyRoutingModule,
    RouterModule
  ],
})
export class FormlyModule { }
