import { loginModel } from './../models/LoginModel';
import { SignupModel } from './../models/SignupModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {
signupUrl="http://localhost:9090/api/auth/register";
loginUrl="http://localhost:9090/api/auth/athenticate";
token:any;
  constructor(private http:HttpClient) {

  }

  signup(form:SignupModel ):Observable<SignupModel>{
    return this.http.post<SignupModel>(this.signupUrl,form);

  }

  login(form:loginModel):Observable<loginModel>{
    return this.http.post<loginModel>(this.loginUrl,form);
  }


  logout(): void {
    // Remove the token from storage on logout
    localStorage.removeItem('tokenChat');

  }

  setToken(token:any){

    return localStorage.setItem('tokenChat',token);

  }
  getToken(){
    return localStorage.getItem('tokenChat')
  }

}
