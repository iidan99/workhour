import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    
    // console.log(this.loginData.checkLogin());
    this.httpService.getUsers('idan', '1234').subscribe(
      (response) => console.log(response));
    this.loginForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){

  }
  signIn(){
    
  }
}
