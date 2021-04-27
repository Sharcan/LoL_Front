import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    if(this.loginForm.valid){
      this.accountService.login(this.loginForm.value).subscribe(
        res => {
          this.tokenService.setToken('token', res.token);
          this.accountNotFound = false;
          this.router.navigateByUrl('/dashboard');
        },
        err => {
          this.accountNotFound = true;
        }
      )
    }
  }

}
