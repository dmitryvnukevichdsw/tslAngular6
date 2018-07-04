import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public cartService: CartService) {}
}
