import {Injectable} from '@angular/core';
import { Hero } from '../../app.component';
import { HEROES } from './mock-heroes';

import { Headers, Http, Response } from '@angular/http';
//import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Rx';
@Injectable()

export class HeroService {
	private heroesUrl = 'http://localhost:53487/api/hero';  // URL to web api
	constructor(private http: Http) { }
	/*From Local Service*/
	// getHeroes():Promise<Hero[]>{
	// 	return  Promise.resolve(HEROES);
	// }

	/*Using Promise*/
	getHeroPromise(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
			//.map((response: Response) => response.json())//map OR then both works			
			.toPromise()			
			.then(response => response.json())
			.catch((err:any)=>{
				console.log('Promise Error ', err);
				return Promise.reject(err);
			});

	   }

	/*Observable*/
	getHero() {
		return this.http.get(this.heroesUrl)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}
	private handleError(error: any) {
		console.log('An error occurred', error);
		return Observable.throw(error);
	}

}