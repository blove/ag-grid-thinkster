import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import {
  accounts,
  customers,
  orderItems,
  orders,
  products
} from '../../../../../data/data.json';

@Component({
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
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
      valueFormatter: ({ value }) => this.datePipe.transform(value, 'short')
    },
    {
      headerName: 'Total',
      field: 'total',
      filter: 'agNumberColumnFilter',
      filterParams: {
        applyButton: true,
        clearButton: true
      }
    }
  ];

  /**
   * Import orders from /data/data.json file and join with account and customer data.
   */
  rowData: Array<{ [key: string]: string | number | object }> = orders.map(
    order => ({
      ...order,
      account: accounts.find(account => account.id === order.accountId),
      customer: customers.find(customer => customer.id === order.customerId),
      orderItems: orderItems.filter(item => item.orderId === order.id),
      total: orderItems
        .filter(item => item.orderId === order.id)
        .map(item => products.find(product => product.id === item.productId))
        .reduce((prev, current) => prev + Number(current.price), 0)
    })
  );

  constructor(private readonly datePipe: DatePipe) {}
}
