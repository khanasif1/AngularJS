import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroComponent } from './hero/app.hero';
import { DashboardComponent } from './Dashboard/app.dashboard';
import { HttpModule }    from '@angular/http';
import 'rxjs/Rx';
import { routing } from './app.routing';
import { UserComponent } from './User/app.user';
import { UserDirective } from './User/app.user.directive';
@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, HeroComponent, DashboardComponent,UserComponent, UserDirective],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
