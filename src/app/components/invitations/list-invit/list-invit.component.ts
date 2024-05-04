import { InvResult } from './../models/InvResult';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceInvService } from '../service/service-inv.service';
import { UserServiceService } from '../../../profile/service/user-service.service';



@Component({
  selector: 'app-list-invit',
  standalone: true,
  imports: [],
  templateUrl: './list-invit.component.html',
  styleUrl: './list-invit.component.scss',
})
export class ListInvitComponent {
  invModel: InvResult[] = [];
  listInv :InvResult[]=[];
  id!:any;
  email:any;

  constructor(
    private serviceInv: ServiceInvService,
    private router: Router,
    private serviceUser:UserServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getUserByEmail() ;

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
      this.getListInvByReciever();
    });
  }

  getListInvByReciever() {
    if (this.id) {
      this.serviceInv.getListInv(this.id).subscribe(data => {
        console.log("data", data);
        this.listInv = data;
        console.log("list inv model result", this.listInv);
      });
    }

  }

  accepterInv(id:any){
    this.serviceInv.accepterInvitation(id).subscribe(data => {
      alert("invitation accepté");

    }, error => {
      console.log('Error activating doctor:', error);
    });

  }

  seeDetails(id: string) {
    this.router.navigate(['detail-compte-Medecin', id]);
  }
}
