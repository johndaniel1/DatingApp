import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    children: [

  { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
  { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
  { path: 'message', component: MessagesComponent},
  { path: 'lists', component: ListsComponent}, ]},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
