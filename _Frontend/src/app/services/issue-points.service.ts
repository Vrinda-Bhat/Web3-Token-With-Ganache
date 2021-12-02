import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class IssuePointsService {

  private apiUrl = "http://localhost:8000/mint/mintTransfer";
 
  constructor(private http:HttpClient) { }
  issuePoint(acc:string, amt:number): Observable<any>{
      const reqBody={ "owner":`${environment.ownerId}`,
      "account": `${acc}`,
      "amount": `${amt}`
      }
      return this.http.post<any>(this.apiUrl,reqBody,httpOptions);
  }
}
