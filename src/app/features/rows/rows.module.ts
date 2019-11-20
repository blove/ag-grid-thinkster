import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { DraggingComponent } from './dragging';
import { SortingComponent } from './sorting';

const routes: Route[] = [
  {
    path: 'sorting',
    component: SortingComponent
  },
  {
    path: 'dragging',
    component: DraggingComponent
  },
  {
    path: 'spanning'
  },
  {
    path: 'pinning'
  },
  {
    path: 'height'
  },
  {
    path: 'width'
  }
];

@NgModule({
  declarations: [SortingComponent, DraggingComponent],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class RowsModule {}
