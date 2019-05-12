import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  info: {};
  data: Observable<AngularFireDatabase>;
  constructor(private firebaseAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user = firebaseAuth.authState;
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.info = value.user.uid;
        console.log('Nice, it worked!');
        console.log(this.info);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
     this.db.database.ref(`/user`);
      });
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.info = value.user.uid;
        console.log('Success!', value);

      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }
}

