import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { products } from '../../../../../data/data.json';

@Component({
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: the user friendly name to display for the column header.
   * field: the field (property) of the rowData
   * sortable: boolean (default is false) to indicate if the column can be sorted
   * filter:
   *   agNumberColumnFilter - number filter
   *   boolean - default filter is the agTextColumnFilter in community edition
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    {
      headerName: 'Price',
      field: 'price',
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    { headerName: 'Color', field: 'color', filter: true },
    { headerName: 'Details', field: 'details', filter: 'agTextColumnFilter' }
  ];

  /**
   * Import products from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number }> = products.map(
    ({ name, price, color, details }) => ({
      name,
      price: Number(price),
      color,
      details
    })
  );
}
