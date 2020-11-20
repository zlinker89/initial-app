import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/LoginResponse';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://190.131.221.26:8080/Polivalente/api/Login.php';
  constructor(private __http: HttpClient) { }
  login(user: string, password: string): Observable<LoginResponse>{
    return this.__http.post<LoginResponse>(this.apiUrl, {
      usuario: user,
      contrasena: password,
    });
  }
}
