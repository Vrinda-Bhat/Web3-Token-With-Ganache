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
export class TransferPointsService {
  private apiUrl = "http://localhost:8000/transfer/WalletTransfer";
  
  constructor(private http:HttpClient) { }
  
  transferPoints(acc1: string,acc2:string, amt: number ): Observable<any> {
        const reqBody={
      "account1": `${acc1}`,
      "account2": `${acc2}`,
      "amount": `${amt}`
  }
    return this.http.post<any>(this.apiUrl,reqBody,httpOptions);

  }

}
