import { InvResult } from './../models/InvResult';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceInvService } from '../service/service-inv.service';



@Component({
  selector: 'app-list-invit',
  standalone: true,
  imports: [],
  templateUrl: './list-invit.component.html',
  styleUrl: './list-invit.component.scss',
})
export class ListInvitComponent {
  invModel: InvResult[] = [];

  id = '2';
  constructor(
    private service: ServiceInvService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getListInvitaions();

  }


  getListInvitaions() {
    return this.service.getListInv(this.id).subscribe(
      (data) => {
        this.invModel = data;

        console.log('reload data ==>>', this.invModel);
      },

      (err) => {
        console.error('Error ', err);
      }
    );
  }

  accepterInv(id:any){
    this.service.accepterInvitation(id).subscribe(data => {
      alert("invitation accepté");

    }, error => {
      console.log('Error activating doctor:', error);
    });

  }

  seeDetails(id: string) {
    this.router.navigate(['detail-compte-Medecin', id]);
  }
}
