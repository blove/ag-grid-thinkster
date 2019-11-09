import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Response, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'https://reqres.in/api';

  constructor(private readonly httpClient: HttpClient) {}

  fetch(page = 1): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(
      `${this.baseUrl}/users?page=${page}`
    );
  }
}
