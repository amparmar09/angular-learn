import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllCountry() {
    return this.http.get("https://countriesnow.space/api/v0.1/countries/positions");
  }

  getAllCities(country: string) {
    const payload = { "country": country }
    return this.http.post("https://countriesnow.space/api/v0.1/countries/cities/", payload);
  }

}
