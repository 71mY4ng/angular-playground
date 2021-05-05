import { NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';


const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatMenuModule,
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
