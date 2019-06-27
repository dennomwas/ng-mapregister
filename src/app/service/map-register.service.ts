import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// local imports
import { Map } from '../models/map-interface';

@Injectable({
  providedIn: 'root'
})
export class MapRegisterService {

  mainUrl = `https://jsonplaceholder.typicode.com`;

  headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addMap(id: string, mapName: string, area: string,
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
    return this.http.post<Map>(this.mainUrl, newMap, this.headers);
  }

  getAllMaps(): Observable<Map[]> {
    const getUrl = `${this.mainUrl}/posts`;

    return this.http.get<Map[]>(getUrl, this.headers);
  }

  getOneMap(id: string): Observable<Map> {
    const getUrl = `${this.mainUrl}/posts/id`;

    return this.http.get<Map>(getUrl, this.headers);
  }

  deleteMap(id: string): Observable<Map> {
    const deleteUrl = `${this.mainUrl}/posts/id`;

    return this.http.delete<Map>(deleteUrl, this.headers);
  }

  updateMap(id: string, mapName: string, area: string,
            locality: string, mapType: string, lrNo: string,
            frNo: string, sheetNo: string): Observable<Map> {

    const updateUrl = `${this.mainUrl}/posts/id`;
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

}
