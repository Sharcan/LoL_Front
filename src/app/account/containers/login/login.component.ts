import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public accountNotFound: boolean = false;

  public loginForm = new FormGroup({
    username: new FormControl('Sharcan', [Validators.required]),
    password: new FormControl('azerty123', [Validators.required])
  })

  constructor(
    private accountService: AccountService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    if(this.loginForm.valid){
      this.accountService.login(this.loginForm.value).subscribe(
        res => {
          console.log(res);
          this.tokenService.setToken('token', res.token);
          this.accountNotFound = false;
        },
        err => {
          console.log(err);
          this.accountNotFound = true;
        }
      )
    }
  }

}
