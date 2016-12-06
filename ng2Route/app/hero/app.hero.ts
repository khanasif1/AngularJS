import { Component, Input, OnInit} from '@angular/core';
import { HeroService } from './heroservice/hero.service';
import { Observable} from 'rxjs/Rx';
import { Hero } from '../app.component';

@Component({
    selector: 'app-hero',
    templateUrl: 'app/hero/app.hero.html',
	providers: [HeroService]
})
export class HeroComponent {

	@Input() hero: { id: number; name: number; };

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		/*Using Observable*/
		//this.getHeroes();

		/* Using Promise */
		this.getHeroesPromise();
	}

	/* Using Promise */
	heroes: Promise<Hero[]>;
	getHeroesPromise(): void {
		this.heroes = this.heroService.getHeroPromise()
			.catch((err) => {
				console.log(err);
			});
		var data = this.heroes;
	}
}