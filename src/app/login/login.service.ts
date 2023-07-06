import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {user} from './ILogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }
  public getuser(facture1: user): Observable<user> {
    console.log(facture1);
    return this.http.post<user>(`http://localhost:8080/getuser`, facture1);

  }

}
