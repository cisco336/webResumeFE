import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  login() {
    this.afAuth
      .signInWithEmailAndPassword('cisco336@gmail.com', 'Test123!')
      .then(x => {
        this.currentUser.next(x.user);
        this.router.navigate(['dashboard']);
      });
  }
  logout() {
    this.afAuth.signOut().then(() => {
      this.currentUser.next(null);
      this.router.navigate(['/login']);
    });
  }
  register() {
    this.afAuth.createUserWithEmailAndPassword(
      'franciscoarleo336@gmail.com',
      'Test123!'
    );
  }
  getCurrentUser() {
    this.afAuth.authState.subscribe(state => {
      this.currentUser.next(state);
    });
  }
}
