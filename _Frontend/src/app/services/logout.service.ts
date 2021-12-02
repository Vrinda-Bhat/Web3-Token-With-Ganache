import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private apiUrl = "http://localhost:8000/logout/logout";
 
  constructor(private http:HttpClient) { }
  logout(): Observable<any> {  
    const reqBody = "";
    return this.http.post<any>(this.apiUrl,reqBody);

  }
}
