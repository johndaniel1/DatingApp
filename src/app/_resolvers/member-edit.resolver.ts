import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';


@Injectable()
export class MemberEditResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router, private authservice: AuthService,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(this.authservice.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
