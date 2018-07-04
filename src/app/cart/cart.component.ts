import { Component } from '@angular/core';
import {CartService} from '../../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  handleCheckout() {
    alert('Start checkout process...');
  }
}
