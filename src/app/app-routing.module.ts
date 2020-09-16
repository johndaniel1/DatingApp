import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    children: [
  { path: 'members', component: MemberListComponent},
  { path: 'message', component: MessagesComponent},
  { path: 'lists', component: ListsComponent}, ]},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
