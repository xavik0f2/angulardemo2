import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private _heroesService: HeroesService) {
      console.log("Constructor exection");
  }


  ngOnInit() {
    console.log("ngOnInit");
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
