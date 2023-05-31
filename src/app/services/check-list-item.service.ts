import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ChecklistItemModel } from '../models/check-list-item.model';

@Injectable()
export class ChecklistItemsService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<ChecklistItemModel[]> {
    return this._httpClient.get<ChecklistItemModel[]>(`https://63810e439440b61b0d10b7c7.mockapi.io/checklist-items`)
  }
}
