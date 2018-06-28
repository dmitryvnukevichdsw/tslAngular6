import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <app-header></app-header>
    <h1>Cart works!</h1>
    <app-footer></app-footer>
  `,
})
export class CartComponent implements OnInit {
  constructor() { }


  ngOnInit() {
  }

}
