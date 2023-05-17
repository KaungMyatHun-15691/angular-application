import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token !== 'user') {
      return false;
    }
    return true;
  }
}
