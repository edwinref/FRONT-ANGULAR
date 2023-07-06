import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Bts } from './bts';
import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';


@Injectable({ providedIn: 'root' })
export class BtsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  public getProcessingCodes(): Observable<{ code: string, description: string }[]> {
  return this.http.get<{ code: string, description: string }[]>('http://localhost:8080/bts/processingcodes');
}


public getBts(): Observable<Bts[]> {
  const url = `${this.apiServerUrl}/bts/all`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  return this.http.get<Bts[]>(url, { headers });
}

  public addBts(bts: Bts): Observable<Bts> {
    return this.http.post<Bts>(`${this.apiServerUrl}/bts/add`, bts);
  }

  updateBts(bts: Bts): Observable<Bts> {
    const url = `${this.apiServerUrl}/bts/${bts.msg_seq}`;
    return this.http.put<Bts>(url, bts);
  }

  public deleteBts(msg_seq: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/bts/delete/${msg_seq}`);
  }

  public getAllFields(bts: Bts): string[] {
    const fields: string[] = Object.keys(bts);
    return fields;
  }

  public truncateTable(): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/bts/truncate`);
  }
  getDefaultValues(): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/bts/default_values`);
  }


}
