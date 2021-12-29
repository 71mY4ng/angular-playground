import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayMaintainComponent } from './holiday-maintain/holiday-maintain.component';
import { ScheduleMaintainComponent } from './schedule-maintain/schedule-maintain.component';
import { ServerFileComponent } from './server-file/server-file.component';

const routes: Routes = [
    { path: 'holidayMaintain', data: { breadcrumb: 'Holiday Maintenance' }, component: HolidayMaintainComponent },
    { path: 'taskMaintain', data: { breadcrumb: 'Task Maintenance' }, component: ScheduleMaintainComponent },
    { path: 'serverFile', data: { breadcrumb: 'Server Files' }, component: ServerFileComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }
