
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// local imports
import { MapRegistryComponent } from './components/map-registry/map-registry.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MapsComponent } from './components/map-registry/maps/maps.component';
import { AddmapComponent } from './components/map-registry/addmap/addmap.component';
import { SearchResultsComponent } from './components/map-registry/search-results/search-results.component';
import { UpdateMapComponent } from './components/map-registry/update-map/update-map.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset-password',
    component: LoginComponent
  },
  {
    path: 'map-register',
    component: MapRegistryComponent,
    children: [
      {
        path: 'all-maps',
        component: MapsComponent,
      },
      {
        path: 'add-map',
        component: AddmapComponent
      },
      {
        path: 'update-map/:id',
        component: UpdateMapComponent
      },
      {
        path: 'delete-map/:id',
        component: MapsComponent
      },
      {
        path: 'map/:id',
        component: MapsComponent
      },
      {
        path: 'search-results',
        component: SearchResultsComponent
      },
      {
        path: 'delete',
        component: MapsComponent
      }
    ]
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
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
