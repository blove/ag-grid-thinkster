import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Customer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private readonly httpClient: HttpClient) {}

  fetch(page = 1, limit = 20): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(
      `${environment.apiBaseUrl}/customers?_page=${page}&_limit=${limit}`
    );
  }
}
