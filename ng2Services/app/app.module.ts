import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroComponent } from './hero/app.hero';
import { HttpModule }    from '@angular/http';
import 'rxjs/Rx';
@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, ],
  declarations: [ AppComponent, HeroComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
