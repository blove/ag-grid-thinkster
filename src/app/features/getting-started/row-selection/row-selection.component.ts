import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';

import { products } from '../../../../../data/data.json';

@Component({
  templateUrl: './row-selection.component.html',
  styleUrls: ['./row-selection.component.scss']
})
export class RowSelectionComponent {
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
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true
    },
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

  /** A comma-separated list of selected products by name. */
  selection = new BehaviorSubject<string>('');

  /** The ag-Grid Grid API. */
  private gridApi: GridApi;

  onGridReady({ api }) {
    this.gridApi = api;
  }

  onSelectionChanged(): void {
    const selectedProductNames = this.gridApi
      .getSelectedRows()
      .map(row => row.name)
      .join(', ');
    this.selection.next(selectedProductNames);
  }
}
