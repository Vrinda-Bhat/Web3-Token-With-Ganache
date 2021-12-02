import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared-resources/models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  private apiUrl = "http://localhost:8000/register/newUser";
 
  constructor(private http:HttpClient) { }
  userRegister(uLogin:User): Observable<any> {
  //  const reqBody:LoginCredential={"email": `${email}`, "password": `${pass}`}

    return this.http.post<any>(this.apiUrl,uLogin,httpOptions);
  }
}

