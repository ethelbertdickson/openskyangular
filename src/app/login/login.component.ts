import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  onSubmit() {
    this.auth.login(this.username, this.password).subscribe((success) => {
      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}
