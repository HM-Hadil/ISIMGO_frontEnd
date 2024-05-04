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
  url3="http://localhost:9090/api/inv//recievedInvAccepted";

  constructor(private http:HttpClient) { }

 //liste d'invitation par reciever id
  getListInv(id:any):Observable<InvResult[]>{
    return this.http.get<InvResult[]>(`${this.url}/${id}`);

  }

  //liste invitation par reciver id avec status invitation :accpted :qui envoyer par
  // reciever id

  getListAmis(id:any):Observable<InvResult[]>{
    return this.http.get<InvResult[]>(`${this.url3}/${id}`);

  }

  //accepter invitation
  accepterInvitation(id: any):Observable<InvResult>{
    return this.http.put<InvResult>(`${this.url2}/${id}`, null);
  }

}
