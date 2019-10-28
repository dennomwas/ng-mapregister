import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/map-registry/top-nav/top-nav.component';
import { MainNavComponent } from './components/map-registry/main-nav/main-nav.component';
import { SideNavComponent } from './components/map-registry/side-nav/side-nav.component';
import { SearchComponent } from './components/map-registry/search/search.component';
import { MapsComponent } from './components/map-registry/maps/maps.component';
import { AddmapComponent } from './components/map-registry/addmap/addmap.component';
import { SearchResultsComponent } from './components/map-registry/search-results/search-results.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MapRegistryComponent } from './components/map-registry/map-registry.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UpdateMapComponent } from './components/map-registry/update-map/update-map.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainNavComponent,
    SideNavComponent,
    SearchComponent,
    MapsComponent,
    AddmapComponent,
    SearchResultsComponent,
    LoginComponent,
    MapRegistryComponent,
    RegisterComponent,
    UpdateMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
