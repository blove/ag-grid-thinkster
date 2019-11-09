import { Component } from '@angular/core';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';

import { products } from '../../../../../data/data.json';

@Component({
  templateUrl: './column-api.component.html',
  styleUrls: ['./column-api.component.scss']
})
export class ColumnApiComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * colId: The unique ID to give the column. This is optional.
   *        If missing, the ID will default to the field.
   *        If both field and colId are missing, a unique ID will be generated.
   *        This ID is used to identify the column in the API for sorting, filtering etc.
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
      colId: 'price',
      headerName: 'Price',
      field: 'price',
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    { headerName: 'Color', field: 'color', filter: true },
    {
      colId: 'details',
      headerName: 'Details',
      field: 'details',
      filter: 'agTextColumnFilter'
    }
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

  /** The ag-Grid Column API. */
  private columnApi: ColumnApi;

  /** The ag-Grid Grid API. */
  private gridApi: GridApi;

  onGridReady({ api, columnApi }) {
    this.columnApi = columnApi;
    this.gridApi = api;
  }

  onToggleDetailsColumn(): void {
    const detailsColumn = this.columnApi.getColumn('details');
    console.log(detailsColumn.isVisible());
    this.columnApi.setColumnVisible(detailsColumn, !detailsColumn.isVisible());
  }

  onSortByNameAndPrice(sort: 'asc' | 'desc'): void {
    this.gridApi.setSortModel([
      {
        colId: 'name',
        sort
      },
      {
        colId: 'price',
        sort
      }
    ]);
    console.log(this.gridApi.getSortModel());
  }
}
