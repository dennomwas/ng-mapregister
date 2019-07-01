import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// local imports
import { MapsComponent } from './components/maps/maps.component';
import { AddmapComponent } from './components/addmap/addmap.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  {
    path: 'map-register',
    component: MapsComponent
  },
  {
    path: 'map-register/add-map',
    component: AddmapComponent
  },
  {
    path: 'map-register/update-map/:id',
    component: AddmapComponent
  },
  {
    path: 'map-register/delete-map/:id',
    component: MapsComponent
  },
  {
    path: 'map-register/map/:id',
    component: MapsComponent
  },
  {
    path: 'map-register/search-results',
    component: SearchResultsComponent
  },
  {
    path: '',
    redirectTo: '/map-register',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/map-register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
