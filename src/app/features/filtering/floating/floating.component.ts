import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';

import { customers } from '../../../../../data/data.json';

@Component({
  selector: 'app-floating',
  templateUrl: './floating.component.html',
  styleUrls: ['./floating.component.scss']
})
export class FloatingComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * sortable: Set to true to allow sorting on this column.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', filter: true },
    { headerName: 'Catch Phrase', field: 'catchPhrase', filter: true },
    { headerName: 'Street', field: 'address.street1', filter: true },
    { headerName: 'City', field: 'address.city', filter: true },
    { headerName: 'State', field: 'address.state', filter: true },
    {
      headerName: 'Zip',
      field: 'address.zip',
      filter: 'agNumberColumnFilter',
      suppressMenu: true
    }
  ];

  /**
   * Import customers from /data/data.json file
   */
  customers: Array<{ [key: string]: string | number | object }> = customers.map(
    customer => ({
      ...customer,
      address: {
        ...customer.address,
        zip: Number(customer.address.zip.slice(0, 5))
      }
    })
  );

  onGridReady({ api }: { api: GridApi }) {
    api.sizeColumnsToFit();
  }
}
