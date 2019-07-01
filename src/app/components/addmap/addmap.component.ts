import { Component, OnInit } from '@angular/core';

// local imports
import { Map } from '../../models/map-interface';
import { MapRegisterService } from './../../service/map-register.service';

@Component({
  selector: 'app-addmap',
  templateUrl: './addmap.component.html',
  styleUrls: ['./addmap.component.css']
})
export class AddmapComponent implements OnInit {
  newMapItem: Map;
  updateMapItem: Map;


  constructor(private mapregisterservice: MapRegisterService) { }

  addMap(id: string, mapName: string, area: string,
         locality: string, mapType: string,
         lrNo: string, frNo: string, sheetNo: string) {

    this.mapregisterservice.addMap(
      id, mapName, area, locality, mapType, lrNo, frNo, sheetNo)
      .subscribe(response => {
        this.newMapItem = response;
      }, error => {
        console.log(error);
      });
  }

  updateMap(id: string, mapName: string, area: string,
            locality: string, mapType: string,
            lrNo: string, frNo: string, sheetNo: string) {

    this.mapregisterservice.updateMap(
      id, mapName, area, locality, mapType, lrNo, frNo, sheetNo)
      .subscribe(response => {
        this.updateMapItem = response;
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}
