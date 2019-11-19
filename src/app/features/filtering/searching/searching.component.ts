import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColDef, GridApi } from 'ag-grid-community';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { customers } from '../../../../../data/data.json';

@Component({
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnDestroy, OnInit {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * sortable: Set to true to allow sorting on this column.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Catch Phrase', field: 'catchPhrase' },
    { headerName: 'Street', field: 'address.street1' },
    { headerName: 'City', field: 'address.city' },
    { headerName: 'State', field: 'address.state' },
    { headerName: 'Zip', field: 'address.zip' }
  ];

  /**
   * Import customers from /data/data.json file
   */
  customers: Array<{ [key: string]: string | number | object }> = customers;

  /** Search query. */
  q = new FormControl('');

  /** Unsubscribe from observables when the component is destroyed. */
  private destroy = new Subject();

  /** The ag-Grid Grid API. */
  private gridApi: GridApi;

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.unsubscribe();
  }

  ngOnInit(): void {
    this.q.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(value => this.gridApi.setQuickFilter(value));
  }

  onGridReady({ api }: { api: GridApi }) {
    this.gridApi = api;
    api.sizeColumnsToFit();
  }
}
