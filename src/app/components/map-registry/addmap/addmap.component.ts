import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// local imports
import { Map } from '../../../models/map-interface';
import { MapRegisterService } from '../../../service/map-register.service';

@Component({
  selector: 'app-addmap',
  templateUrl: './addmap.component.html',
  styleUrls: ['./addmap.component.css']
})

export class AddmapComponent implements OnInit {

  newMap: any;
  mapTypes = ['R.I.M Maps', 'Survey Plans', 'Topo-Cadastral Maps'];

  newMapForm() {
    this.newMap = this.formbuilder.group({
      mapType: ['', Validators.required],
      mapName: ['', Validators.required],
      areaName: ['', Validators.required],
      locality: ['', Validators.required],
      lrNumber: [''],
      frNumber: [''],
      sheetNumber: ['']
    });
  }

  constructor(private mapregisterservice: MapRegisterService, private formbuilder: FormBuilder) { }

  onSubmit(mapType: string, mapName: string, areaName: string,
           locality: string, lrNumber: string, frNumber: string, sheetNumber: string) {

    this.mapregisterservice.addMap(mapType, mapName, areaName, locality, lrNumber, frNumber, sheetNumber)
      .subscribe(response => {
        this.newMap = response;
        console.log(response, 'Hello');
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.newMapForm();
  }

}
