import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

// local imports
import { MapRegisterService } from '../../../service/map-register.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  newSearch: any;

  searchForm() {
    this.newSearch = this.formbuilder.group({
      searchName: ['', Validators.required]
    });
  }

  constructor(private mapregisterservice: MapRegisterService, private formbuilder: FormBuilder) { }

  onSubmit(searchName: string) {
    this.mapregisterservice.searchMap(searchName)
      .subscribe(response => {
        this.newSearch = response;
      }, error => {
        console.log(error);
      });

  }

  ngOnInit() {
    this.searchForm();
  }

}
