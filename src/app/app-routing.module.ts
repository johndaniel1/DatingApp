import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';
import { PreventUnsavedChangesGuard } from './_guard/prevent-unsavedChanges.guard';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    children: [

  { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
  { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
  { path: 'member/edit', component: MemberEditComponent, resolve: {users: MemberEditResolver}, canDeactivate: [PreventUnsavedChangesGuard]},
  { path: 'message', component: MessagesComponent},
  { path: 'lists', component: ListsComponent}, ]},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
