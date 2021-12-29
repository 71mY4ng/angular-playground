import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableViewComponent } from './datatable-view/datatable-view.component';

import { MaterialModule } from '../../material/material.module';
import { DatatableModule } from './datatable/datatable.module';

const components = [
    DatatableViewComponent,
];

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        DatatableModule,
        MaterialModule,
    ]
})
export class StdCommonModule { }
