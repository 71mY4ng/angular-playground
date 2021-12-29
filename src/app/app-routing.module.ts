import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableViewComponent } from './common/std-common/datatable-view/datatable-view.component';
import { DyDialogComponent } from './common/std-common/dy-dialog/dy-dialog.component';
import { LoginComponent } from './common/std-common/login/components/login.component';
import { LoginGuard } from './common/std-common/login/login.guard';
import { HerosComponent } from './heros/heros.component';

const routes: Routes = [
    { path: 'heroes', data: { breadcrumb: 'Heroes' }, component: HerosComponent },
    { path: 'datatable-view', data: { breadcrumb: 'Datatable' }, component: DatatableViewComponent, canActivate: [ LoginGuard ] },
    { path: 'login', component: LoginComponent },
    { path: 'dy-temp', data: { breadcrumb: 'DynamicTemplate' }, component: DyDialogComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
