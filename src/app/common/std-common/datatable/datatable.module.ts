import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
    declarations: [
        DatatableComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        DatatableComponent
    ]
})
export class DatatableModule { }
