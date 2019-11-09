import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { customers } from '../../../../../data/data.json';

@Component({
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: the user friendly name to display for the column header.
   * field: the field (property) of the rowData
   * sortable: boolean (default is false) to indicate if the column can be sorted
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', sortable: true },
    { headerName: 'Catch Phrase', field: 'catchPhrase', sortable: true },
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
