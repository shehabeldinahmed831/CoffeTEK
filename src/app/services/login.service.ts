import { ErrorHandler, EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logging:boolean=false;
  constructor(private _HttpClient:HttpClient,private _Router:Router) { }

  userLogout() {
    return localStorage.removeItem("token");
  }

  isLoggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
