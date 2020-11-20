import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginResponse } from '../interfaces/LoginResponse';
import { UserResponse } from '../interfaces/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user = {} as LoginResponse;
  constructor(
    private _http: HttpClient
  ) { }
  getUsuarios(): Observable<UserResponse[]>{
    return this._http.get<UserResponse[]>('https://jsonplaceholder.typicode.com/todos/');
  }
}
