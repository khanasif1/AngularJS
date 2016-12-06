import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: 'app/app.hero.html'
})
export class HeroComponent { 

	@Input() hero:{id: number, name: number };

	constructor(){}		
  }