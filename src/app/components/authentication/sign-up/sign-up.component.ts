import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceAuthService } from '../service/service-auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

signUpForm!:FormGroup;
  public constructor(private service:ServiceAuthService, private fb:FormBuilder){
    this.signUpForm = this.fb.group({
      "firstname":["",Validators.required],
      "lastname":["",Validators.required],
      "resume":[""],
      "email":["",Validators.required],
      "password":["",Validators.required],

    });
  }

signUp() {

}

}
