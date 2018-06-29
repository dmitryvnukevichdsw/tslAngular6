import { Component } from '@angular/core';
import {CartService} from 'tsl-commerce-services-a2/dist/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  constructor(public cartService: CartService) {}
}
