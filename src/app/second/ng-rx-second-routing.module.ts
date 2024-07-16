import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first.component';
import { DashboardComponent } from './components/layout/dashboaed.component';
import { UsersComponent } from './containers/users.component';
import { ViewUserComponent } from './containers/view-user.component';
import { PostComponent } from './containers/post.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {path: '', component: UsersComponent},
      {path: 'user/:id', component: ViewUserComponent},
      {path: 'post', component: PostComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRxSecondRoutingModule { }
