import { Component} from '@angular/core';
import { UserDirective } from './app.user.directive';


@Component({
	selector:'user',
	templateUrl:'app/User/app.user.html'
})

export class UserComponent {
	
	constructor() {}
	name ='Asif Khan';
	age=34;
}
