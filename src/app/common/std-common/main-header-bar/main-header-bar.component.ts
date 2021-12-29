import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

export interface NavLink {
  label: string;
  link: string;
  index: number;
}

@Component({
    selector: 'app-main-header-bar',
    templateUrl: './main-header-bar.component.html',
    styleUrls: ['./main-header-bar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderBarComponent implements OnInit {

  links: NavLink[];
  activeLink?: NavLink;

  constructor(private router: Router, private auth: AuthService) {
      this.links = [
          {
              label: 'Heros',
              link: '/heroes',
              index: 0
          }, {
              label: 'Protected',
              link: '/protected',
              index: 1
          }, {
              label: 'Datatable Test',
              link: '/datatable-view',
              index: 2
          },{
              label: 'Dynamic Template',
              link: '/dy-temp',
              index: 3
          },
      ];
  }

  ngOnInit(): void {
  }

  isAuthenticated() {
      return this.auth.isAuthenticated();
  }

  getUsername() {
      return this.auth.username;
  }

  showProfileCard() {

  }

}
