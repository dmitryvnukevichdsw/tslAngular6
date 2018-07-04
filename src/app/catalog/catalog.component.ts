import { Component, OnInit } from '@angular/core';
import {CatalogDataService} from '../../../services';

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
