import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  public login(formValue: FormGroup) {
    console.log(formValue);
    return this.http.post<any>(environment.apiUrl + '/authenticate', formValue);
  }

  public register(formValue: FormGroup) {
    return this.http.post<any>(environment.apiUrl + '/account', formValue)
  }

  public getAccountPayload() {
    const token = this.tokenService.getToken();

    if(token) {
      const accountPayload = atob(token.split(".")[1]);
      return JSON.parse(accountPayload);
    } else {
      return null;
    }
  }


}
