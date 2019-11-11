import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from './default';

const routes: Route[] = [
  {
    path: 'default',
    component: DefaultComponent
  },
  {
    path: 'moving'
  },
  {
    path: 'sizing'
  },
  {
    path: 'pinning'
  },
  {
    path: 'delta'
  }
];

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ColumnModule {}
