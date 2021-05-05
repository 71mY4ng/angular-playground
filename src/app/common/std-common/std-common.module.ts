import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { DatatableViewComponent } from './datatable-view/datatable-view.component';

import { MaterialModule } from '../../material/material.module';

const components = [
  DatatableComponent,
  DatatableViewComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class StdCommonModule { }
