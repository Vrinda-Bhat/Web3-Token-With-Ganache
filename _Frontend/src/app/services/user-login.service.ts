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
export class UserLoginService {

  private apiUrl = "http://localhost:8000/login/newLogin";
 
  constructor(private http:HttpClient) { }
  userLogin(uLogin:LoginCredential): Observable<any> {
    //const reqBody:LoginCredential={"email": `${email}`, "password": `${pass}`}

    return this.http.post<any>(this.apiUrl,uLogin,httpOptions);
  }

}
