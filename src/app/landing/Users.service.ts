import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Users} from './Users';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseURL = 'http://localhost:8080/saveuser';

  constructor(private httpClient: HttpClient) {

  }
  public saveuserY(user: Users): Observable<Users> {
    return this.httpClient.post<Users>(`${this.baseURL}`, user);
  }

}
