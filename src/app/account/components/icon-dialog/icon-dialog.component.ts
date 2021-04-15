import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-icon-dialog',
  templateUrl: './icon-dialog.component.html',
  styleUrls: ['./icon-dialog.component.scss']
})
export class IconDialogComponent implements OnInit {

  public iconList: Array<any> = [];
  public iconUrl = 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/profileicon/';
  public selectedIcon: number = 0;

  constructor(
    private accountService: AccountService
  ) { }

  public ngOnInit(): void {
    this.accountService.getAllIcons().subscribe(
      (icone) => {
        const randomIcon = this._getRandomInt(Object.keys(icone.data).length);
        for(const [key, value] of Object.entries(icone.data)) {
          if(parseInt(key, 10) >= randomIcon && parseInt(key, 10) <= (randomIcon + 50)) {
            this.iconList.push(value);
          } else if(parseInt(key, 10) > (randomIcon + 51)) {
            break;
          }
        }
      }
    )
  }

  public selectIcon(index: number) {
    this.selectedIcon = index;
  }

  private _getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
