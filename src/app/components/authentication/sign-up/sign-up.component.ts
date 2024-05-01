import { SignupModel } from './../models/SignupModel';
import { Component } from '@angular/core';
import { ServiceAuthService } from '../service/service-auth.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../sharedComponents/navbar/navbar.component';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,NavbarComponent
    ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signuModel!:SignupModel;

  signUpForm!:FormGroup;
  public constructor(private service:ServiceAuthService, private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.signUpForm = this.fb.group({ // Use FormBuilder to create the form
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      resume: [""],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

  }

signUp( ) {
  this.signuModel=this.signUpForm.value;

  this.service.signup(this.signuModel).subscribe(data=>{
    console.log("data",data);
    console.log("form",this.signUpForm);
  })


}

}
