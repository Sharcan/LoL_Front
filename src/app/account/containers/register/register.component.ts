import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { TokenService } from '../../services/token.service';


import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerError: boolean = false;
  public errorMessage: string = "";
  public iconUrl = 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/profileicon/';
  public selectedImage = 0 + '.png';


  registerForm = new FormGroup({
    // icon: new FormControl('0.png'),
    username: new FormControl('Sharcan'),
    password: new FormControl('azerty123')
  });

  constructor(
    private accountService: AccountService,
    private tokenService: TokenService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  public onSubmit(){
  //   this.registerForm.controls['icon'].setValue(this.selectedImage);
  //   if(this.registerForm.valid){
  //     this.accountService.register(this.registerForm.value).subscribe(
  //       res => {
  //         this.registerError = false;
  //         this.loginAfterRegister();
  //       },
  //       err => {
  //         this.errorMessage = err.error.message;
  //         this.registerError = true;
  //       }
  //     );
  //   }
  }

  // private loginAfterRegister() {
  //   this.accountService.login(this.registerForm.value).subscribe(
  //     res => {
  //       this.tokenService.setToken("token", res.token);
  //       this.router.navigateByUrl('/dashboard');
  //     }
  //   );
  // }

  // public openDialog() {
  //   const dialogRef = this.dialog.open(IconDialogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result){
  //       this.selectedImage = result + '.png';
  //     }
  //   });
  // }
}

