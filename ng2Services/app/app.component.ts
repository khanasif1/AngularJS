
import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero/heroservice/hero.service';
import { Observable} from 'rxjs/Rx';
export class Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [HeroService]
})
export class AppComponent {
  constructor(private heroService: HeroService) { }
  title = 'Tour of Heroes';
  /* mock hero files */
  //heroes=HEROES;
  // heroes : Hero[];

  /* Using Observable */
  //heroes : Observable<any[]>; 

  /* Using Promise */
  heroes: Promise<Hero[]>;

  hero: Hero = {
    id: 1,
    name: 'Asif'
  };

  ngOnInit(): void {
    /*Using Observable*/
    //this.getHeroes();

    /* Using Promise */
    this.getHeroesPromise();
  }

  /*Using Observable*/
  //  getHeroes(): void {
  //   this.heroes = this.heroService.getHero()
  //   .catch((err)=>{
  //     console.log(err);
  //     return Observable.of(true);
  //   });    
  // }

    /* Using Promise */
  getHeroesPromise(): void {
    this.heroes = this.heroService.getHeroPromise()
      .catch((err) => {
        console.log(err);
      });
      var data=this.heroes;
  }
}
