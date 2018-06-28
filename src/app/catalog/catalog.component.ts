import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  template: `
    <app-header></app-header>
    <app-catalog-list></app-catalog-list>
    <app-footer></app-footer>
  `,
})
export class CatalogComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

}
