import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StdCommonModule } from './common/std-common/std-common.module';
import { environment } from '../environments/environment';
import { MainHeaderBarModule } from './common/std-common/main-header-bar/main-header-bar.module';
import { LoginModule } from './common/std-common/login/login.module';
import { NgxWebstorageModule } from 'ngx-webstorage';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    StdCommonModule,
    MainHeaderBarModule,
    LoginModule,
    NgxWebstorageModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
