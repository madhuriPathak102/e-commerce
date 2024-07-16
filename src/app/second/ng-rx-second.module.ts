import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgRxSecondRoutingModule } from './ng-rx-second-routing.module';
import { FirstComponent } from './first.component';
import { MaterialModule } from './material.module';
import { UsersComponent } from './containers/users.component';
import { PostComponent } from './containers/post.component';
import { DashboardComponent } from './components/layout/dashboaed.component';
import { HeaderComponent } from './components/layout/header.component';
import { LayoutComponent } from './components/layout/youtube-layout.component';
import { UserCardComponent } from './components/user-card.component';
import { UserListComponent } from './components/user-list.component';
import { ErrorComponent } from './components/error.component';
import { UpdateUserComponent } from './components/update-user.component';
import { ViewUserComponent } from './containers/view-user.component';
import { PostListComponent } from './components/post-list.component';
import { PostCardComponent } from './components/post-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    FirstComponent,
    UsersComponent,
    PostComponent,
    DashboardComponent,
    HeaderComponent,
    LayoutComponent,
    UserCardComponent,
    UserListComponent,
    ErrorComponent,
    UpdateUserComponent,
    ViewUserComponent,
    PostListComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    NgRxSecondRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FlexModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class NgRxSecondModule { }
