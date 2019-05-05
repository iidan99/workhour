import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  users: User[] = [];

  constructor(private db: AngularFireDatabase) {
  }


  getUsers(user: string, password: string) {
    var x = this.db.list("users");
    // console.log(this.db.list(`users/2`));
    x.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        var y = element.payload.toJSON();
        // y["$key"] = element.key;
        this.users.push(y as User);
        console.log(this.users);
      })
    })
    if (this.users.find(x => x.user === user && x.password === password)) {
      console.log('hum');
    }
    else{
      console.log('password or User name is incorrect');
    }
  }
}

interface User {
  user: string;
  password: string;
  state: string;
}