import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(tokenName: string, token: string) {
    localStorage.setItem(tokenName, token);
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public removeToken(){
    localStorage.removeItem('token');
  }
}
