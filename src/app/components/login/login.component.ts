import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true
  loginForm: FormGroup | any
  authService: any;
  constructor(private formbuilder: FormBuilder, private router: Router, private authguard: AuthGuard) { }
  ngOnInit(): void {
    this.createform()
  }

  createform() {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    })
  }

  onSubmit() {
    const storedUser = JSON.parse(sessionStorage.getItem('userData') || '{}');
    if (storedUser && storedUser.email === this.loginForm.value.email && storedUser.password === this.loginForm.value.password) {
      sessionStorage.setItem('isloggedIn', 'true');
      this.router.navigate(['/dashboard'])
      // console.log('isloggedin', storedUser);
      return true;
    } else {
      alert('Invalid Login')
      return false;
    }

  }

}
