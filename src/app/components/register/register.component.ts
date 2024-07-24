import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup|any
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createregisterform()
  }

  createregisterform(){
    this.registerForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
    onSubmit(){
      console.log(this.registerForm.value);
      

      
    }

}
