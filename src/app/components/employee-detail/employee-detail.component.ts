import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { EmployeeModel } from 'src/app/models/employee.model';
import { ProjectModel } from 'src/app/models/project.model';
import { TeamModel } from 'src/app/models/team.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent  implements OnInit {

Detail$: Observable<EmployeeModel>= this.employeesService.getOne('id')
Team$: Observable<TeamModel>= this._teamService.getOne('id')
TeamAvatars$: Observable<TeamModel[]>=this._teamService.getAll()
Projects$: Observable<ProjectModel[]>=this._projectsService.getAll()
  constructor(


    private employeesService: EmployeesService,
    private route: ActivatedRoute,
    private _teamService: TeamsService,
    private _projectsService: ProjectsService
  ) { }

  public selectedTabSubject = new Subject<string>();
  selectedTab$ = this.selectedTabSubject.asObservable();
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const employeeId = params.get('id');
      if (employeeId !== null) {
        this.Detail$ = this.employeesService.getOne(employeeId);
        this.Team$ = this._teamService.getOne(employeeId); 
        this.Projects$ = this._projectsService.getAll();
        this.TeamAvatars$ = this._teamService.getAll()
      }
    });
  }
  selectTeamsTab() {
    this.selectedTabSubject.next('teams');
  }
  
  selectProjectsTab() {
    this.selectedTabSubject.next('projects');
  }
}