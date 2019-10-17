import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// local imports
import { MapRegisterService } from '../../../service/map-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any;
  newPassword: any;
  resetForm = false;

  constructor(private mapregisterservice: MapRegisterService,
              private formbuilder: FormBuilder,
              private router: Router) { }

  loginForm() {
    this.loginData = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(email: string, password: string) {
    this.mapregisterservice.login(email, password)
      .subscribe(response => {
        this.loginData = response;
        console.log('response', response);
      }, error => {
        console.log('error', error);
      });
  }

// reset password

  toggleResetForm() {
    this.resetForm = !this.resetForm;
  }

  passwordResetForm() {
    this.newPassword = this.formbuilder.group({
      email: ['', Validators.required]
    });
  }

  onPasswordReset(email: string) {
    this.mapregisterservice.resetPassword(email)
      .subscribe(response => {
        this.newPassword = response;
        console.log('new pass', response);
      }, error => {
        console.log('error', error);
      });
  }

  ngOnInit() {
    this.loginForm();
    this.passwordResetForm();
  }

}

