import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, forkJoin, map, switchMap } from 'rxjs';
import {
  ProjectModel,
  mapProjectWithData,
  ProjectWithData,
} from '../models/project.model';
import { ProjectWithDataQueryModel } from '../querymodels/project-data.querymodel';
import { EmployeeModel } from '../models/employee.model';
import { TeamModel } from '../models/team.model';

@Injectable()
export class ProjectsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ProjectModel[]> {
    return this._httpClient.get<ProjectModel[]>(
      `https://646f899709ff19b120876fb8.mockapi.io/projects`
    );
  }

  getOne(id: string): Observable<ProjectModel> {
    return this._httpClient.get<ProjectModel>(
      `https://646f899709ff19b120876fb8.mockapi.io/projects/${id}`
    );
  }

  getProjectsByEmployeeId(
    employeeId: string
  ): Observable<ProjectWithDataQueryModel[]> {
    const projects$ = this._httpClient.get<ProjectModel[]>(
      `https://646f899709ff19b120876fb8.mockapi.io/projects`
    );
    const employees$ = this._httpClient.get<EmployeeModel[]>(
      `https://646f899709ff19b120876fb8.mockapi.io/employees`
    );
    const teams$ = this._httpClient.get<TeamModel[]>(
      `https://646f899709ff19b120876fb8.mockapi.io/teams`
    );

    return combineLatest([projects$, employees$, teams$]).pipe(
      switchMap(([projects, employees, teams]) => {
        const teamAssignments: { [projectId: string]: string[] } = {};
        teams.forEach((team: TeamModel) => {
          team.projects.forEach((project: { id: number; name: string }) => {
            const projectId = project.id.toString();
            if (teamAssignments[projectId]) {
              teamAssignments[projectId].push(team.id.toString());
            } else {
              teamAssignments[projectId] = [team.id.toString()];
            }
          });
        });

        const filteredProjects = projects.filter((project: ProjectModel) => {
          const assignedTeams = teamAssignments[project.id];
          return assignedTeams && assignedTeams.includes(employeeId);
        });

        const employeeData$ = employees$;

        return employeeData$.pipe(
          map((employees: EmployeeModel[]) => {
            const mappedProjects = filteredProjects.map(
              (project: ProjectModel) => {
                return mapProjectWithData(project, employees);
              }
            );

            return mappedProjects;
          })
        );
      })
    );
  }
}
