import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TasksService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<TaskModel[]> {
    return this._httpClient.get<TaskModel[]>(`https://63810e439440b61b0d10b7c7.mockapi.io/tasks`);
  }

  getAllByProjectId(projectId: string): Observable<TaskModel[]> {
    return this._httpClient.get<TaskModel[]>(`https://63810e439440b61b0d10b7c7.mockapi.io/tasks`).pipe(
      map(tasks => tasks.filter(t => t.projectId === projectId))
    )
  }

  getOne(id: string):Observable<TaskModel> {
    return this._httpClient.get<TaskModel>(`https://63810e439440b61b0d10b7c7.mockapi.io/tasks/${id}`);
  }
}
