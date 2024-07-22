import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgRxSecondRoutingModule } from './ng-rx-second-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { YoutubelayoutComponent } from './components/layout/youtube-layout/youtube-layout.component';
import { UsersComponent } from './containers/users/users.component';
import { MaterialModule } from './material.module';
import { PostComponent } from './containers/post/post.component';
import { ErrorComponent } from './components/error.component';
import { PostCardComponent } from './components/post-card.component';
import { PostListComponent } from './components/post-list.component';
import { ViewUserComponent } from './containers/view-user.component';
import { UserListComponent } from './components/user-list.component';
import { UpdateUserComponent } from './components/update-user.component';
import { UserCardComponent } from './components/user-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    YoutubelayoutComponent,
    UsersComponent,
    UserListComponent,
    UpdateUserComponent,
    UserCardComponent,
    PostComponent,
    PostCardComponent,
    PostListComponent,
    ErrorComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    NgRxSecondRoutingModule,
    FlexLayoutModule,
    FlexModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  bootstrap: []
})
export class NgRxSecondModule { }
