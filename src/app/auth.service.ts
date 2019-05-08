import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  info: {};
items: Observable<any[]>;
  constructor(private firebaseAuth: AngularFireAuth, db: AngularFirestore) {
    this.user = firebaseAuth.authState;
    this.items = db.collection('items').valueChanges();
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
      });
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.info = value.user.uid;
        this.items.subscribe(a => a.push(value.user));
        console.log('Success!', value);

      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }
}

