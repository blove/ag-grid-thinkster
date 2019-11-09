import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Customer } from 'src/app/models/index.js';

import { customers } from '../../../../../data/data.json';

@Component({
  templateUrl: './value-getter.component.html',
  styleUrls: ['./value-getter.component.scss']
})
export class ValueGetterComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * valueGetter: Function or expression. Gets the value from your data for display.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Catch Phrase', field: 'catchPhrase' },
    {
      headerName: 'Address',
      field: 'address',
      valueGetter: ({ data }: { data: Customer }) =>
        `${data.address.street1} ${data.address.city}, ${data.address.state} ${data.address.zip}`
    }
  ];

  /**
   * Import customers from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number | object }> = customers;
}
