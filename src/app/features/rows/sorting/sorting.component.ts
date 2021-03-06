import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';

import { customers } from '../../../../../data/data.json';

@Component({
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * sortable: Set to true to allow sorting on this column.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', sortingOrder: ['asc', 'desc'] },
    {
      headerName: 'Catch Phrase',
      field: 'catchPhrase',
      sortingOrder: ['asc', 'desc']
    },
    { headerName: 'Street', field: 'address.street1' },
    { headerName: 'City', field: 'address.city' },
    { headerName: 'State', field: 'address.state' },
    { headerName: 'Zip', field: 'address.zip' }
  ];

  /** Default column definition. */
  defaultColDef: ColDef = {
    sortable: true
  };

  /**
   * Import customers from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number | object }> = customers;

  /** Override the default sorting order (asc, desc, null) */
  sortingOrder = ['desc', 'asc', null];

  onGridReady({ api }: { api: GridApi }) {
    api.sizeColumnsToFit();
  }
}
