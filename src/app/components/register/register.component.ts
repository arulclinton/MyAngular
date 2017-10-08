import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  title = "MyAngular | Register Online";

  rForm: FormGroup;
  post: any;
 


  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'firstName': [null, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ])],
      'lastName': [null, Validators.compose([
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(15)
      ])],
      'emailId': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      'userName': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      'password': [null, Validators.compose([
        Validators.required, 
        Validators.minLength(5)
      ])],
      'confirmPassword': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])]
    })
  }


  onRegister(){
    alert();

  }
}


export class registerUser{
  private firstName:string;
  private lastName:string;
  private userName:string;
  private email:string;
  private password:string;
}