import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalSupplyService {
  private apiUrl = "http://localhost:8000/totalSupply/allWalletBalance";
  constructor( private http:HttpClient) { }
  checkTotalSupply(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
