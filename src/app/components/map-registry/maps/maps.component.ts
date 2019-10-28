import { Component, OnInit } from '@angular/core';

// local imports
import { MapRegisterService } from '../../../service/map-register.service';
import { Map } from '../../../models/map-interface';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
    maps: any;
  singleMap: Map;
  updateMapItem: Map;
  deleteMapItem: Map;
  selectedMap: Map;
  confirm = false;
  // errorMessage: string;

  constructor(private mapregisterservice: MapRegisterService) { }

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
        console.log('deleted', response);
      }, error => {
        console.log(error);
      });
    this.closeModal();
  }

  showDetails(map) {
    this.selectedMap = map;
  }

  toggleConfirm() {
    this.confirm = !this.confirm;
  }

  closeModal() {
    this.selectedMap = null;
  }

  ngOnInit() {
    this.mapregisterservice.getAllMaps()
      .subscribe(response => {
        this.maps = response;
        console.log('maps', response);
      }, error => {
        console.log(error);
      });
  }

}
