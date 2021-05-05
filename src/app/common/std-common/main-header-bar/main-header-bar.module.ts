import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { MainHeaderBarComponent } from './main-header-bar.component'
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [MainHeaderBarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    MainHeaderBarComponent
  ]
})
export class MainHeaderBarModule { }
