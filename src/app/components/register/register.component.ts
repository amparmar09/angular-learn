import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  hide = true;
  UserRegister: FormGroup | any;
  city: any[] = [];
  country: any[] = [];
  filteredcountry: Observable<any> | any;
  filteredcity: any;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.createForm();
    this.getCountry();
  }

  createForm() {
    this.UserRegister = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      middlename: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      datepicker: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      dateofbirth: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  register() {
    console.log(this.UserRegister.value)
  }

  private _filteredcountry(value: string): any {
    const filtervalue = value.toLowerCase();
    return this.country.filter(country => country.name.toLowerCase().includes(filtervalue))
  }

  private _filteredcity(value: any): any {
    const filter = value.toLowerCase();
    return this.city.filter(city => city.toLowerCase().includes(filter))
  }

  getCountry() {
    this.userservice.getAllCountry().subscribe((res: any) => {
      this.country = res.data;
      this.filteredcountry = this.UserRegister.get("country").valueChanges.pipe(startWith(''), map((value: any) => this._filteredcountry(value)))
    })
    console.log(this.country)
  }

  getCity(event: any) {
    this.userservice.getAllCities(event.target.value).subscribe((res: any) => {
      this.city = res.data;
      this.filteredcity = this.UserRegister.get("city").valueChanges.pipe(startWith(''), map((value: any) => this._filteredcity(value)))
    })
    console.log(event.target.value)
  }

}
