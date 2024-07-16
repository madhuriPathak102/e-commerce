import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgRxSecondRoutingModule } from './ng-rx-second-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgRxSecondRoutingModule,
    FlexLayoutModule,
    FlexModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: []
})
export class NgRxSecondModule { }
