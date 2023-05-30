import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamModel } from '../models/team.model';

@Injectable()
export class TeamsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<TeamModel[]> {
    return this._httpClient.get<TeamModel[]>(`https://646f899709ff19b120876fb8.mockapi.io/teams`)
  }

  getOne(id: string): Observable<TeamModel> {
    return this._httpClient.get<TeamModel>(`https://646f899709ff19b120876fb8.mockapi.io/teams/${id}`)
  }
}
