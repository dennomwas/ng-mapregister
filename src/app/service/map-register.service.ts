import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// local imports
import { Map } from '../models/map-interface';

@Injectable({
  providedIn: 'root'
})
export class MapRegisterService {

  mainUrl = `https://cors-anywhere.herokuapp.com/https://map-register.herokuapp.com/v1/map-register`;

  headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addMap(mapName: string, area: string,
    locality: string, mapType: string, lrNo: string,
    frNo: string, sheetNo: string): Observable<Map> {

    const newMap = {
      map_name: mapName,
      area,
      locality,
      map_type: mapType,
      lr_no: lrNo,
      fr_no: frNo,
      sheet_no: sheetNo
    };
    return this.http.post<Map>(`${this.mainUrl}/add-map`, newMap, this.headers);
  }

  getAllMaps(): Observable<Map[]> {
    const getUrl = `${this.mainUrl}`;
    return this.http.get<Map[]>(getUrl);
  }

  getMapsByCategory(category: string): Observable<Map[]> {
    category = category.trim();
    const queryParam = { params: new HttpParams().set('map-type', category) };
    return this.http.get<Map[]>(this.mainUrl, queryParam);

  }

  getOneMap(id: string): Observable<Map> {
    const getUrl = `${this.mainUrl}/id`;

    return this.http.get<Map>(getUrl, this.headers);
  }

  deleteMap(id: string): Observable<Map> {
    const deleteUrl = `${this.mainUrl}/id`;

    return this.http.delete<Map>(deleteUrl, this.headers);
  }

  updateMap(mapName: string, area: string,
    locality: string, mapType: string, lrNo: string,
    frNo: string, sheetNo: string): Observable<Map> {

    const updateUrl = `${this.mainUrl}/id`;
    const mapUpdate = {
      map_name: mapName,
      area,
      locality,
      map_type: mapType,
      lr_no: lrNo,
      fr_no: frNo,
      sheet_no: sheetNo
    };

    return this.http.put<Map>(updateUrl, mapUpdate, this.headers);
  }

  searchMap(searchName: string) {
    const searchUrl = `${this.mainUrl}/posts`;
    const nameToSearch = { searchName };

    return this.http.post(searchUrl, nameToSearch, this.headers);

  }

  login(email: string, password: string) {
    const loginUrl = `${this.mainUrl}/login`;
    const loginData = { email, password };

    return this.http.post(loginUrl, loginData, this.headers);
  }

}
