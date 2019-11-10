import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from '../../shared/shared.module';
import { AsyncComponent } from './async/async.component';
import { CellRenderingComponent } from './cell-rendering';
import { SimpleComponent } from './simple';
import { UpdatingComponent } from './updating';
import { ValueGetterComponent } from './value-getter';

const routes: Routes = [
  {
    path: 'simple',
    component: SimpleComponent
  },
  {
    path: 'async',
    component: AsyncComponent
  },
  {
    path: 'value-getter',
    component: ValueGetterComponent
  },
  {
    path: 'cell-rendering',
    component: CellRenderingComponent
  },
  {
    path: 'updating',
    component: UpdatingComponent
  }
];

@NgModule({
  declarations: [
    AsyncComponent,
    CellRenderingComponent,
    SimpleComponent,
    UpdatingComponent,
    ValueGetterComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DataModule {}
