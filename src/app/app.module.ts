import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { NgxGalleryModule } from 'ngx-gallery';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChangesGuard } from './_guard/prevent-unsavedChanges.guard';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guard/auth.guard';
import { UserService } from './_services/user.service';

export function getToken() {
  localStorage.getItem('token');
}
export class CustomHammerConfig extends HammerGestureConfig {
  ovverides = {
    pinch: { enable: false },
    rotate: { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxGalleryModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost:59921']
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChangesGuard,
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
