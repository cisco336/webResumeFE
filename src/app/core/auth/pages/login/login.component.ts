import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.getCurrentUser();
    this.checkCurrentUser();
  }

  checkCurrentUser() {
    if (this.auth.currentUser.getValue !== null) {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  register() {
    this.auth.register();
  }
}
