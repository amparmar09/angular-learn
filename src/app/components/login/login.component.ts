import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  Userlogin: FormGroup | any
  constructor() { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.Userlogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)])
    })
  }

  login() {
    console.log(this.Userlogin.value)

    if(this.Userlogin.valid){
      localStorage.setItem('loginData',JSON.stringify(this.Userlogin.value))
      alert('login successfull')
    }
    else{
      localStorage.removeItem
      alert('login data is not valid')
    }

  }

}
