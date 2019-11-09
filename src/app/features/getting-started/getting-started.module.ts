import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { SortingComponent } from './sorting';

const directives = [SortingComponent];

const routes: Routes = [
  {
    path: 'sorting',
    component: SortingComponent
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
