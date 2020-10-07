import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { addControltoFormGroup } from '../../../../Utils/helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authenticationForm: FormGroup;

  option: string = 'Sign-in';
  title: string = 'Sign-on';

  isRegistering = false;

  lookPasswd = 'password';

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.auth.getCurrentUser();
    this.checkCurrentUser();

    this.authenticationForm = this.fb.group({});
  }

  checkCurrentUser(): void {
    if (this.auth.currentUser.getValue !== null) {
      this.router.navigate(['dashboard']);
    }
  }

  login(): void {
    this.auth.login();
  }

  logout(): void {
    this.auth.logout();
  }

  register(): void {
    this.auth.register();
  }

  addControls(control: FormControl, name: 'string'): void {
    addControltoFormGroup(this.authenticationForm, control, name);
    const validators = [Validators.required];
    if (name === 'email') {
      validators.push(Validators.email);
    }
    this.authenticationForm.controls[name].setValidators([...validators]);
  }

  changeTitle(checked) {
    this.title = checked ? 'Sign-in' : 'Sign-on';
    this.option = checked ? 'Sign-on' : 'Sign-in';

    this.isRegistering = checked;
    this.authenticationForm.updateValueAndValidity();
  }

  lookPassword() {
    this.lookPasswd = this.lookPasswd === 'password' ? 'text' : 'password';
  }

  submitForm() {
    console.log(this.authenticationForm.value);
  }
}
