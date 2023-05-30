import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>(`https://646f899709ff19b120876fb8.mockapi.io/employees`);
  }
  getOne(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<EmployeeModel>(`https://646f899709ff19b120876fb8.mockapi.io/employees/${id}`);
  }
}
