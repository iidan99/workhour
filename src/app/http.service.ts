import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private readonly dBUrl: string = 'https://workhour-5c1b5.firebaseio.com/users.json';

  constructor(private httpClient: HttpClient) { }

  getUsers(username: string, password: string): Observable<any> {
    const userObj = {
      username,
      password
    };
    return this.httpClient.get(this.dBUrl);
  }
}