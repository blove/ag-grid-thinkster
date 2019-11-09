import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from '../../shared/shared.module';
import { AsyncComponent } from './async/async.component';
import { SimpleComponent } from './simple';

const directives = [AsyncComponent, SimpleComponent];

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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DataModule {}
