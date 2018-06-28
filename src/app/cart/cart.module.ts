import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import {SharedModule} from '../shared/shared.module';
import {CartRoutingModule} from './cart-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
