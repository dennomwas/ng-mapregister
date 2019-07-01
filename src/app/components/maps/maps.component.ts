import { Component, OnInit } from '@angular/core';

// local imports
import { MapRegisterService } from '../../service/map-register.service';
import { Map } from '../../models/map-interface';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor(private mapregisterservice: MapRegisterService) { }
  maps: Map[] = [];
  singleMap: Map;
  updateMapItem: Map;
  deleteMapItem: Map;
  // errorMessage: string;

  getMap(id: any) {
    this.mapregisterservice.getOneMap(id)
      .subscribe(response => {
        this.singleMap = response;
      }, error => {
        console.log(error);
      });
  }

  deleteMap(id: any) {
    this.mapregisterservice.deleteMap(id)
      .subscribe(response => {
        this.deleteMapItem = response;
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.mapregisterservice.getAllMaps()
      .subscribe(response => {
        this.maps = response;
      }, error => {
        console.log(error);
      });
  }

}
