import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Brewery from '../models/brewery';
import { map } from "rxjs/operators";

@Injectable()
export default class BreweryService {
  public API = 'https://api.openbrewerydb.org'
  public BREWERIES_API = `${this.API}/breweries`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Brewery>> {
    return this.http.get<Array<Brewery>>(this.BREWERIES_API).pipe(map(arr => arr.sort((a,b) => a.name < b.name ? -1 : 1)));    
  }
}