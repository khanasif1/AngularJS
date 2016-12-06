import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent } from './hero/app.hero';
import { DashboardComponent } from './Dashboard/app.dashboard';
import { UserComponent } from './User/app.user';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'heroes',
		component: HeroComponent
	},
	{
		path: 'user',
		component: UserComponent
	}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);