import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableViewComponent } from './common/std-common/datatable-view/datatable-view.component';
import { LoginComponent } from './common/std-common/login/components/login.component';
import { LoginGuard } from './common/std-common/login/login.guard';
import { HerosComponent } from './heros/heros.component'

const routes: Routes = [
  { path: 'heroes', component: HerosComponent },
  { path: 'datatable-view', component: DatatableViewComponent, canActivate: [ LoginGuard ] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
