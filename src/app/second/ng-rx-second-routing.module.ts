import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  // {
  //   path: '', component: DashboardComponent,
  //   children: [
  //     {path: '', component: UsersComponent},
  //     {path: 'user/:id', component: ViewUserComponent},
  //     {path: 'post', component: PostComponent},
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRxSecondRoutingModule { }
