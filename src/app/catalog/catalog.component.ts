import { Component, OnInit } from '@angular/core';
import {CatalogDataService} from 'tsl-commerce-services-a2/dist/services';

@Component({
  selector: 'app-catalog',
  template: `
    <app-catalog-list [items]="items"></app-catalog-list>
  `,
})
export class CatalogComponent implements OnInit {
  constructor(private catalogDataService: CatalogDataService) {}

  items;

  ngOnInit() {
    this.items = this.catalogDataService.getCatalogData();
  }
}
