import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any
  router: any;
  user: any;
  registereduser: any;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createregisterform()
  }

  createregisterform() {
    this.registerForm = this.formbuilder.group({
      firstName: ['', Validators.required, Validators.minLength(2)],
      lastName: ['', Validators.required, Validators.minLength(2)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.registerForm.value);
    sessionStorage.setItem('userData',JSON.stringify(this.registerForm.value))
    this.router.navigate[('/login')]
  }
}
