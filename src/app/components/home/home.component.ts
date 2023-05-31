import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';

import { TeamsService } from '../../services/teams.service';
import { EmployeesService } from '../../services/employees.service';
import { EmployeeModel } from '../../models/employee.model';
import { ProjectsService } from '../../services/projects.service';
import { TeamWithDataQueryModel, mapTeamWithData } from 'src/app/querymodels/team-data.querymodel';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly teams$: Observable<TeamWithDataQueryModel[]> = combineLatest([
    this._teamsService.getAll(),
    this._employeesService.getAll(),
    this._projectsService.getAll()
  ]).pipe(
    map(([teams, employees, projects]) => teams.map(t => mapTeamWithData(t, employees, projects)))
  );

  constructor(private _teamsService: TeamsService, private _employeesService: EmployeesService, private _projectsService: ProjectsService) {
  }
}
