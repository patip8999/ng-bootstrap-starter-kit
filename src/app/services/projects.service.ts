import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectModel } from '../models/project.model';

@Injectable()
export class ProjectsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProjectModel[]> {
    return this._httpClient.get<ProjectModel[]>(`https://646f899709ff19b120876fb8.mockapi.io/projects`);
  }

  getOne(id: string): Observable<ProjectModel> {
    return this._httpClient.get<ProjectModel>(`https://646f899709ff19b120876fb8.mockapi.io/projects/${id}`);
  }
}
