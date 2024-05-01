import { Component } from '@angular/core';
import { ServiceAuthService } from '../../components/authentication/service/service-auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../UserModel';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-header-profile',
  standalone: true,
  imports: [],
  templateUrl: './header-profile.component.html',
  styleUrl: './header-profile.component.scss'
})
export class HeaderProfileComponent {
   email:any;
  user!:UserModel;
  constructor(private service:ServiceAuthService , private router:Router
    ,private userService:UserServiceService
  ){

  }

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
  this.userService.getUserByEmail(this.email).subscribe(
   (res)=>{
     console.log(res);
     this.user=res;

   }
  )

  }


  logout(){
    this.service.logout();
    this.router.navigate(['/login'])


  }

}
