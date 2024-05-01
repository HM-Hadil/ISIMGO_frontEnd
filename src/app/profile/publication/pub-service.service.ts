import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PubModel } from './PubModel';

@Injectable({
  providedIn: 'root',
})
export class PubServiceService {
  pub = 'http://localhost:9090/api/publications/create';
  listPub="http://localhost:9090/api/publications/user"

  getUserByEmail(email: any) {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient) {}
  createPub(id: string, content: string): Observable<PubModel> {
    const body = { id, content };
    return this.http.post<PubModel>(this.pub, body);
  }

  getlistPub(id:any):Observable<PubModel[]>{
    return this.http.get<PubModel[]>(`${this.listPub}/${id}`)
  }
}
