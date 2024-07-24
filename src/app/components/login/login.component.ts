import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true
  loginForm: FormGroup | any
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createform()
  }

  createform() {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(user: any) {
    console.log(this.loginForm.value)


    localStorage.setItem('user', JSON.stringify(user));


    // if (this.loginForm.valid) {
    //   const email = this.loginForm.value.email;
    //   const password = this.loginForm.value.password;

    //   if (this.authService.login(email, password)) {

    //     this.router.navigate(['/dashboard']);
    //   } else {

    //     alert('Invalid credentials. Please try again.');
    //   }
    // } else {

    //   this.loginForm.markAllAsTouched();
    // }

  }

}
