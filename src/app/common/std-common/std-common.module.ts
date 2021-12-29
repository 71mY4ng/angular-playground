import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableViewComponent } from './datatable-view/datatable-view.component';

import { MaterialModule } from '../../material/material.module';
import { DatatableModule } from './datatable/datatable.module';
import { DyDialogComponent } from './dy-dialog/dy-dialog.component';

const components = [
    DatatableViewComponent,
    DyDialogComponent,
];

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        DatatableModule,
        MaterialModule,
    ],
    exports: components
})
export class StdCommonModule { }
