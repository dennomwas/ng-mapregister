import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SearchComponent } from './components/search/search.component';
import {  MapsComponent} from './components/maps/maps.component';
import { AddmapComponent } from './components/addmap/addmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    MainNavComponent,
    SideNavComponent,
    SearchComponent,
    MapsComponent,
    AddmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
