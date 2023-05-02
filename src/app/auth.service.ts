import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userTokenKey = 'userToken';

  constructor(private router: Router) {}

  public login(username: string, password: string): Observable<boolean> {
    // Simulate a login process by checking the username and password
    // against a hardcoded value. If they match, store the user token
    // in local storage and return true, otherwise return false.
    if (username === 'admin' && password === 'password') {
      localStorage.setItem(this.userTokenKey, 'user-token');
      return of(true);
    } else {
      return of(false);
    }
  }

  public logout(): void {
    // Remove the user token from local storage on logout.
    localStorage.removeItem(this.userTokenKey);
  }

  public isLoggedIn(): boolean {
    // Check if the user token is present in local storage to determine
    // if the user is logged in or not.
    return !!localStorage.getItem(this.userTokenKey);
  }

  public isAuthenticated(): boolean {
    // Check if the user is authenticated
    // For example, check if there is a token in local storage or a session cookie
    const token = localStorage.getItem(this.userTokenKey);
    if (!!token) {
      return true;
    } else {
      // If there is no token, navigate to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
