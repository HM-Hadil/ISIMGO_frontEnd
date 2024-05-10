import { Component } from '@angular/core';
import { InvResult } from '../models/InvResult';
import { ServiceInvService } from '../service/service-inv.service';
import { UserServiceService } from '../../../profile/service/user-service.service';

@Component({
  selector: 'app-liste-amis',
  standalone: true,
  imports: [],
  templateUrl: './liste-amis.component.html',
  styleUrl: './liste-amis.component.scss'
})
export class ListeAmisComponent {
  listAmis:InvResult[]=[];
  id!:any;
  email:any;

  constructor(private serviceInv:ServiceInvService,private serviceUser:UserServiceService) {

  }
  ngOnInit() {
    this.getUserByEmail();



  }
  getUserByEmail() {
    const token = localStorage.getItem('tokenChat');
    const tokenParts = token?.split('.');
    const decodedToken = JSON.parse(atob(tokenParts![1]));
    const email = decodedToken.sub;
    this.serviceUser.getUserByEmail(email).subscribe((res) => {
      console.log(res);
      this.id = res.id;
      console.log('idReciever', this.id);
      // Call getListInvByReciever here
      this.getListAmisByReciever();
    });
  }

  deleteInv(id:any){
    this.serviceInv.deleteInv(id).subscribe(data=>{
      console.log("data")
      alert("amis retiré");
      window.location.reload();
    })
  }
  getListAmisByReciever() {
    if (this.id) {
      this.serviceInv.getListAmis(this.id).subscribe(data => {
        console.log("data", data);
        this.listAmis = data;
        console.log("list amis model result", this.listAmis);
      });
    }

  }}
