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
import { ScheduleMaintainComponent } from './pages/schedule-maintain/schedule-maintain.component';
import { HolidayMaintainComponent } from './pages/holiday-maintain/holiday-maintain.component';
import { ServerFileComponent } from './pages/server-file/server-file.component';
import { PageModule } from './pages/page.module';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        HerosComponent,
        ScheduleMaintainComponent,
        HolidayMaintainComponent,
        ServerFileComponent,
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
        NgxWebstorageModule.forRoot(),
        PageModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
