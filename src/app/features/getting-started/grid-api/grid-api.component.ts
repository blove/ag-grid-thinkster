import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';

import { products } from '../../../../../data/data.json';

@Component({
  templateUrl: './grid-api.component.html',
  styleUrls: ['./grid-api.component.scss']
})
export class GridApiComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * sortable: Set to true to allow sorting on this column.
   * filter:
   *   agNumberColumnFilter - number filter
   *   boolean - default filter is the agTextColumnFilter in community edition
   * checkboxSelection: Set to true (or return true from function) to render a selection checkbox in the column.
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
    // get reference to the Grid API
    this.gridApi = api;

    // size the columns to fit in the grid
    this.gridApi.sizeColumnsToFit();
  }

  onSelectAll(): void {
    this.gridApi.selectAll();
  }

  onDeselectAll(): void {
    this.gridApi.deselectAll();
  }

  onExportToCsv(): void {
    this.gridApi.exportDataAsCsv();
  }

  onSelectionChanged(): void {
    const selectedProductNames = this.gridApi
      .getSelectedRows()
      .map(row => row.name)
      .join(', ');
    this.selection.next(selectedProductNames);
  }
}
