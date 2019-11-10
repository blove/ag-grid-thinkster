import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';

import { customers } from '../../../../../data/data.json';
import { Customer } from '../../../models';

@Component({
  selector: 'app-cell-rendering',
  templateUrl: './cell-rendering.component.html',
  styleUrls: ['./cell-rendering.component.scss']
})
export class CellRenderingComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * valueGetter: Function or expression. Gets the value from your data for display.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    {
      headerName: 'avatar',
      field: 'avatar',
      width: 100,
      cellRenderer: ({ value }) =>
        `<img style="height: 14px; width: 14px;" src="${value}" />`
    },
    { headerName: 'Catch Phrase', field: 'catchPhrase' },
    {
      headerName: 'Address',
      valueGetter: ({ data }: { data: Customer }) =>
        `${data.address.street1} ${data.address.city}, ${data.address.state} ${data.address.zip}`
    }
  ];

  /**
   * Import customers from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number | object }> = customers;

  onGridReady({ api }: { api: GridApi }) {
    api.sizeColumnsToFit();
  }
}
