import { Component } from '@angular/core';
import { NavbarComponent } from '../../../sharedComponents/navbar/navbar.component';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceAuthService } from '../service/service-auth.service';
import { loginModel } from '../models/LoginModel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   loginForm!:FormGroup;
   loginModel!:loginModel

  constructor(private fb:FormBuilder,private router:Router,private service:ServiceAuthService){

    this.loginForm=fb.group({
      "email":["",[Validators.email,Validators.required]],
      "password":["",[Validators.required]]
    })

  }


  login(){
    this.loginModel=this.loginForm.value;
    this.service.login(this.loginModel).subscribe((res:any)=>{
      if(res){
        alert("login successfully");
      console.log(this.loginModel);
      console.log(res);
      this.service.setToken(res.token)
      console.log("tokenChat",res.token);
      this.router.navigate(['/profile'])
    }
      else{
        alert(res)
      }
    })

  }


}
