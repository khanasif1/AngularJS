
import { Component, OnInit } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    // providers: [HeroService]
})
export class AppComponent {
  constructor() { }
  title = 'Angular2 is Fun';
}
