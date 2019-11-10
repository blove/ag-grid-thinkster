import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ColDef, GridApi } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { CustomerService } from 'src/app/services';

const DEFAULT_LIMIT = 20;

@Component({
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent {
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

  /** The form for controling the grid. */
  formGroup = this.formBuilder.group({
    limit: DEFAULT_LIMIT
  });

  /** The current page for pagination of users. */
  page = 1;

  /** The pagination size. Defaults to 20. */
  paginationPageSize: Observable<number> = this.formGroup.valueChanges.pipe(
    startWith(DEFAULT_LIMIT),
    map(({ limit }) => limit)
  );

  /** Fetched users from reqres.in */
  customers = this.formGroup.valueChanges.pipe(
    startWith({ limit: DEFAULT_LIMIT }),
    switchMap(({ limit }) =>
      this.customerService.fetch(this.page, limit).pipe(
        map(customers =>
          customers.map(({ name, catchPhrase, address }) => ({
            name,
            catchPhrase,
            address: `${address.street1} ${address.city}, ${address.state} ${address.zip}`
          }))
        )
      )
    )
  );

  constructor(
    private readonly customerService: CustomerService,
    private readonly formBuilder: FormBuilder
  ) {}

  onGridReady({ api }: { api: GridApi }) {
    api.sizeColumnsToFit();
  }
}
