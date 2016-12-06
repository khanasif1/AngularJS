
import { Component } from '@angular/core';
// import { HeroComponent } from './app.hero';

const HEROES:Hero[]=[
 { id: 11, name: 'Asif A Khan' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' }

];
export class Hero
{
  id:number;
  name:string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
    // directives : [HeroComponent]
})
export class AppComponent { 
  title = 'Tour of Heroes';
  heroes=HEROES;
  hero :  Hero = {
    id:1,
    name:'Asif'
  };
}
