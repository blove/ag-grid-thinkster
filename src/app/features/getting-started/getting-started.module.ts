import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { FilteringComponent } from './filtering';
import { GridApiComponent } from './grid-api';
import { RowSelectionComponent } from './row-selection';
import { SortingComponent } from './sorting';

const directives = [
  FilteringComponent,
  GridApiComponent,
  SortingComponent,
  RowSelectionComponent
];

const routes: Routes = [
  {
    path: 'sorting',
    component: SortingComponent
  },
  {
    path: 'filtering',
    component: FilteringComponent
  },
  {
    path: 'row-selection',
    component: RowSelectionComponent
  },
  {
    path: 'grid-api',
    component: GridApiComponent
  }
];

@NgModule({
  declarations: [...directives],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class GettingStartedModule {}
