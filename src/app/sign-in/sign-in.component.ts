import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signForm: FormGroup;
  constructor(private auth: AuthService) { }
  @Output() cancel = new EventEmitter<boolean>();

  ngOnInit() {
    this.signForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      repPassword: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    if(this.signForm.value.password !== this.signForm.value.repPassword){
      console.log('password are not the same');
    }
    else{
      this.auth.signup(this.signForm.value.email, this.signForm.value.password);
      console.log('password is the same');
    }
  }

  onCancel(){
    this.cancel.emit(false);
  }
}
