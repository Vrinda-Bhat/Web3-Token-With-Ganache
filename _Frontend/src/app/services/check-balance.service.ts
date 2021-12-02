import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class CheckBalanceService {
  private apiUrl = "http://localhost:8000/balance/checkBalance";
 
  constructor(private http:HttpClient) { }
  walletBalance(walletID:string): Observable<any> {
    const walletid={"account": `${walletID}`}
    
    return this.http.post<any>(this.apiUrl,walletid,httpOptions);

  }
}
