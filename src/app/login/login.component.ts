import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() sign = new EventEmitter<boolean>();

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  
  onSubmit(){
  this.auth.login(this.loginForm.value.user, this.loginForm.value.password);
  }

  signIn(){
    this.sign.emit(true);
  }
}
