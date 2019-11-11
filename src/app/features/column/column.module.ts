import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from './default';
import { MovingComponent } from './moving';

const routes: Route[] = [
  {
    path: 'default',
    component: DefaultComponent
  },
  {
    path: 'moving',
    component: MovingComponent
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
  declarations: [DefaultComponent, MovingComponent],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ColumnModule {}
