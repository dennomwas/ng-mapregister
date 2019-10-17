import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// local imports
import { MapRegisterService } from './../../../service/map-register.service';

@Component({
  selector: 'app-update-map',
  templateUrl: './update-map.component.html',
  styleUrls: ['./update-map.component.css']
})
export class UpdateMapComponent implements OnInit {
  updateMap: any;
  mapTypes = ['R.I.M Maps', 'Survey Plans', 'Topo-Cadastral Maps'];

  constructor(private mapregisterservice: MapRegisterService, private formbuilder: FormBuilder) { }

  updateMapForm() {
    this.updateMap = this.formbuilder.group({
      mapType: ['', Validators.required],
      mapName: ['', Validators.required],
      areaName: ['', Validators.required],
      locality: ['', Validators.required],
      lrNumber: [''],
      frNumber: [''],
      sheetNumber: ['']
    });
  }

  onUpdate(mapType: string, mapName: string, areaName: string,
           locality: string, lrNumber: string, frNumber: string, sheetNumber: string) {

    this.mapregisterservice.updateMap(mapType, mapName, areaName,
      locality, lrNumber, frNumber, sheetNumber)
      .subscribe(response => {
        this.updateMap = response;
        console.log('update details', response);
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.updateMapForm();
  }

}
