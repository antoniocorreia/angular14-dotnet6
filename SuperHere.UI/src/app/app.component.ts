import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superHeroServices: SuperHeroService){}

  ngOnInit():void{
    this.superHeroServices
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
    console.log(this.heroes);
  }

  initNewHero(){
    this.heroToEdit = new SuperHero();
  }

  editHero(hero:SuperHero){
    this.heroToEdit = hero;
  }

  updateHeroList(heroes: SuperHero[]){
    this.heroes = heroes;
  }
}
