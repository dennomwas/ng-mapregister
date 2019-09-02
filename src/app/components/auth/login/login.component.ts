import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// local imports
import { MapRegisterService } from '../../../service/map-register.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any;
  
  constructor(private mapregisterservice: MapRegisterService, private formbuilder: FormBuilder) { }


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
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.loginForm();
  }

}

