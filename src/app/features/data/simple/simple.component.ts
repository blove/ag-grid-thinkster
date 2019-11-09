import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { customers } from '../../../../../data/data.json';

@Component({
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {
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
    { headerName: 'Address', field: 'address' }
  ];

  /**
   * Import customers from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number }> = customers.map(
    ({ name, catchPhrase, address }) => ({
      name,
      catchPhrase,
      address: `${address.street1} ${address.city}, ${address.state} ${address.zip}`
    })
  );
}
