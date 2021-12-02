import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredential } from '../shared-resources/models/loginCredential';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  private apiUrl = "http://localhost:8000/adminLogin/adminLogin";
 
  constructor(private http:HttpClient) { }
  adminLogin(adminLogin:LoginCredential): Observable<any> {
    //const reqBody:LoginCredential={"email": `${email}`, "password": `${pass}`}

    return this.http.post<any>(this.apiUrl,adminLogin,httpOptions);
  }

}
