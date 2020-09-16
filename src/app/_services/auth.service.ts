import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:59921/api/Auth/';
  jwthelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient) { }
login(model: any) {
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwthelper.decodeToken(user.token);
        console.log(this.decodedToken);
      }
    })
  );
}

register(model: any) {
  return this.http.post(this.baseUrl + 'Register', model).pipe(
    map((response: any) => {
      console.log(response);
      })
  );
}

logedIn() {
  const token = localStorage.getItem('token');
  return !this.jwthelper.isTokenExpired(token);
}
}
