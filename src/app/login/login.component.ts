import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    
    // console.log(this.loginData.checkLogin());
    // this.httpService.getUsers('idan', '1234').subscribe(
    //   (response) => console.log(response));
    this.loginForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  
  onSubmit(){
  this.auth.login(this.loginForm.value.user, this.loginForm.value.password);
  }

  signIn(){
    
  }
}
