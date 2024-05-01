import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
useremail="http://localhost:9090/api/users/getByEmail";
  constructor(private http:HttpClient) { }

  getUserByEmail(email:string):Observable<UserModel>{
    return this.http.get<UserModel>(`${this.useremail}/${email}`);
  }
}
