import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../UserModel';
import { UserDetails } from '../UserDetails';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
useremail="http://localhost:9090/api/users/getByEmail";
  constructor(private http:HttpClient) { }

  getUserByEmail(email:string):Observable<UserDetails>{
    return this.http.get<UserDetails>(`${this.useremail}/${email}`);
  }
}
