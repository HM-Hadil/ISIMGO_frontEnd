import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvResult } from '../models/InvResult';

@Injectable({
  providedIn: 'root'
})
export class ServiceInvService {

  url="http://localhost:9090/api/inv/recievedInvSent";
  url2="http://localhost:9090/api/inv/PutAcceptinv";

  constructor(private http:HttpClient) { }

  getListInv(recieverId:string):Observable<InvResult[]>{
    return this.http.get<InvResult[]>(`${this.url}/${recieverId}`);

  }

  //accepter invitation
  accepterInvitation(id: string):Observable<InvResult>{
    return this.http.put<InvResult>(`${this.url2}/${id}`, null);
  }

}
