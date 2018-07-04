import { Component, Input } from '@angular/core';
import {CartService} from '../../../../services';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(public cartService: CartService) {}

  @Input('items') items;
}
