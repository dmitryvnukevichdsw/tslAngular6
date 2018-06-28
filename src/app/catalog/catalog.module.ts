import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ListComponent } from './list/list.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [CatalogComponent, ListComponent]
})
export class CatalogModule { }
