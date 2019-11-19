import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { NumberComponent } from './number';
import { SearchingComponent } from './searching';
import { TextComponent } from './text';

const routes: Route[] = [
  {
    path: 'searching',
    component: SearchingComponent
  },
  {
    path: 'number',
    component: NumberComponent
  },
  {
    path: 'text',
    component: TextComponent
  },
  {
    path: 'date'
  },
  {
    path: 'floating'
  }
];

@NgModule({
  declarations: [SearchingComponent, NumberComponent, TextComponent],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [DatePipe]
})
export class FilteringModule {}
