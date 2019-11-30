import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';

import {
  accounts,
  customers,
  orderItems,
  orders,
  products
} from '../../../../../data/data.json';

@Component({
  templateUrl: './full-width.component.html',
  styleUrls: ['./full-width.component.scss']
})
export class FullWidthComponent implements OnInit {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * sortable: Set to true to allow sorting on this column.
   */
  columnDefs: ColDef[] = [
    {
      headerName: 'Customer Name',
      field: 'customer.name',
      filter: 'agTextColumnFilter'
    },
    {
      headerName: 'Account No',
      field: 'account.accountNumber',
      filter: 'agNumberColumnFilter'
    },
    {
      headerName: 'Date of Order',
      field: 'dateOfOrder',
      filter: 'agDateColumnFilter',
      valueFormatter: ({ value }) => this.datePipe.transform(value, 'shortDate')
    },
    {
      headerName: 'Total',
      field: 'total',
      filter: 'agNumberColumnFilter',
      valueFormatter: ({ value }) => this.currencyPipe.transform(String(value))
    }
  ];

  /**
   * Import orders from /data/data.json file and join with account and customer data.
   * dateOfOrder is a Date object with a hard coded time
   */
  rowData: Array<{
    [key: string]: boolean | string | number | object;
  }> = orders.map(order => ({
    ...order,
    dateOfOrder: new Date(`${order.dateOfOrder.slice(0, 10)}T00:00:00.0`),
    account: accounts.find(account => account.id === order.accountId),
    customer: customers.find(customer => customer.id === order.customerId),
    orderItems: orderItems.filter(item => item.orderId === order.id),
    total: orderItems
      .filter(item => item.orderId === order.id)
      .map(item => products.find(product => product.id === item.productId))
      .reduce((prev, current) => prev + Number(current.price), 0)
  }));

  constructor(
    private readonly currencyPipe: CurrencyPipe,
    private readonly datePipe: DatePipe,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit() {
    this.rowData = [
      {
        isFullWidthCell: true
      },
      ...this.rowData
    ];
  }

  fullWidthCellRenderer(params): string {
    // const el = this.renderer.createElement('div') as HTMLDivElement;
    // el.className = 'full-width-cell';
    // el.innerHTML = 'foo';
    // return el;
    return `
      <div class="full-width-cell">
        ag-Grid is 💪
      </div>
    `;
  }

  getRowHeight({ data }: { data: { [key: string]: any } }): number {
    if (data.isFullWidthCell) {
      return 200;
    }
    return 25;
  }

  isFullWidthCell({ data }): boolean {
    return data.isFullWidthCell;
  }

  onGridReady({ api }: { api: GridApi }) {
    api.sizeColumnsToFit();
  }
}
