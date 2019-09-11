import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/filter';

// local imports
import { MapRegisterService } from '../../../service/map-register.service';
import { Map } from '../../../models/map-interface';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  maptype: string;

  allMapsInCategory: any;

  constructor(private mapregisterservice: MapRegisterService, private route: ActivatedRoute) { }

  mapsCategory() {
    this.mapregisterservice.getMapsByCategory(this.maptype)
      .subscribe(response => {
        this.allMapsInCategory = response;
        console.log('maps in category', response);
      }, error => {
        console.log('error', error);
      });
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.maptype = params.maptype;
        console.log(this.maptype);
      });

  }

}
