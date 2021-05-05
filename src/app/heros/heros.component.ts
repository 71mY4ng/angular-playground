import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  notificationsCnt = 0;

  showProgress = false;

  hero: Hero = {
    id: 1,
    name: 'WindStorms'
  };

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  loadData(): void {
    this.showProgress = true;
    setInterval(() => {
      this.showProgress = false;
    }, 3000);
  }
  
  onSelect(selected: Hero): void {
    this.selectedHero = selected;
  }

}
