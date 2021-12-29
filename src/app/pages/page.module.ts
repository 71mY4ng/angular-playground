import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { MaterialModule } from '../material/material.module';
import { DatatableModule } from '../common/std-common/datatable/datatable.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        PageRoutingModule,
        MaterialModule,
        DatatableModule
    ]
})
export class PageModule { }
