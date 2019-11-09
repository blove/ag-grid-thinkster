import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from '../../shared/shared.module';
import { SimpleComponent } from './simple';

const directives = [SimpleComponent];

const routes: Routes = [
  {
    path: 'simple',
    component: SimpleComponent
  },
  {
    path: 'async'
  },
  {
    path: 'value-getter'
  },
  {
    path: 'update'
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
export class DataModule {}
