import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: "True" }) };

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  public login(formValue: FormGroup) {
    console.log(formValue);
    return this.http.post<any>(environment.apiUrl + '/authenticate', formValue, this.noAuthHeader);
  }

  public register(formValue: FormGroup) {
    console.log(formValue);
    return this.http.post<any>(environment.apiUrl + '/account', formValue, this.noAuthHeader)
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

  public getAllIcons() {
    return this.http.get<any>('http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/profileicon.json');
  }


}
