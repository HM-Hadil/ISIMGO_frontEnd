import { UserModel } from './../UserModel';
import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.scss'
})
export class ProfileUserComponent {
  constructor(private service:UserServiceService){}

 email:any;
 user!:UserModel;
 ngOnInit(): void {
  this.getUserByEmail();
 }
 getUserByEmail(){
  const token= localStorage.getItem('tokenChat');
 console.log("token",token);
 const tokenParts=token?.split('.');
 const decodedToken= JSON.parse(atob(tokenParts![1]));
 this.email=decodedToken.sub;
 console.log(this.email);
 this.service.getUserByEmail(this.email).subscribe(
  (res)=>{
    console.log(res);
    this.user=res;

  }
 )

 }

}
