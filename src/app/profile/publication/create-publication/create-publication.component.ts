import { PubModel } from './../PubModel';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PubServiceService } from '../pub-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-create-publication',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-publication.component.html',
  styleUrl: './create-publication.component.scss',
})
export class CreatePublicationComponent {
  user: any;
  id!:any;
  pubForm!: FormGroup;
  pubModel!: PubModel;

  constructor(
    private service: PubServiceService,
    private userSer:UserServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {

    this.pubForm=fb.group({
      "content":["",Validators.required]
    })
  }

  ngOnInit(): void {
    this.getUserByEmail();}

  createPublication() {
    this.pubModel = this.pubForm.value;
    this.service.createPub(this.id,this.pubModel.content).subscribe(
      data=>{
        console.log('res',data);
      }
    );
  }
  getUserByEmail() {
    const token = localStorage.getItem('tokenChat');
    const tokenParts = token?.split('.');
    const decodedToken = JSON.parse(atob(tokenParts![1]));
    const email = decodedToken.sub;
    this.userSer.getUserByEmail(email).subscribe((res) => {
      this.id = res.id;
      console.log("id",this.id);

    });
  }
}
