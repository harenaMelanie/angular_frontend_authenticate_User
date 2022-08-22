import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user ';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User

  url = 'http://localhost:5000'

  constructor(private http: HttpClient) { } //on injecte le service
  // logUser(user:any) {
  //   return this.http.post(`${this.url}/login`,user);
  // }
  DataSend(api: string, data: any) {
    return this.http.post(this.url + api, JSON.stringify(data));
  }

  signupUser(user: any) {
    return this.http.post(`${this.url}/signup`, user)
  }
  loginUser(user:any){
    return this.http.post(`${this.url}/login`, user)
  }

  addToListUser() {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.url}/users`)
  }
}

