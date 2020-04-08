import { Component, OnInit } from '@angular/core';
import BreweryService from '../shared/api/brewery.service';
import Brewery from '../shared/models/brewery';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html'
})
export class BreweryListComponent implements OnInit {
  breweries: Array<Brewery>;
  filterByName: string = "";

  constructor(private breweryService: BreweryService) {}

  ngOnInit() {
    this.breweryService.getAll().subscribe(data => {
      this.breweries = data;
    });
  }
}
