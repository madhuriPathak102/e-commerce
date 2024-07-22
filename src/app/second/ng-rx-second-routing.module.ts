import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './containers/users/users.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { PostComponent } from './containers/post/post.component';
import { ViewUserComponent } from './containers/view-user.component';
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
