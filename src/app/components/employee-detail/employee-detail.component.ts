import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subject, map } from 'rxjs';
import { ChecklistItemModel } from 'src/app/models/check-list-item.model';
import { EmployeeModel } from 'src/app/models/employee.model';
import { ProjectModel } from 'src/app/models/project.model';
import { TaskModel } from 'src/app/models/task.model';
import { TeamModel } from 'src/app/models/team.model';
import { TaskProgressPipe } from 'src/app/pipes/task-progress/task-progress.pipe';
import { ProjectWithDataQueryModel } from 'src/app/querymodels/project-data.querymodel';
import { ChecklistItemsService } from 'src/app/services/check-list-item.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { TasksService } from 'src/app/services/tasks.service';
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
Projects$: Observable<ProjectWithDataQueryModel[]>=this._projectsService.getProjectsByEmployeeId('employeeId')
CheckList$: Observable<ChecklistItemModel[]>= this._checkListItemService.getAll()
Task$: Observable<TaskModel[]> = this._taskService.getAll()
taskProgressPipe = new TaskProgressPipe();
  constructor(


    private employeesService: EmployeesService,
    private route: ActivatedRoute,
    private _teamService: TeamsService,
    private _projectsService: ProjectsService,
    private _checkListItemService: ChecklistItemsService,
    private _taskService: TasksService
  ) { }

  public selectedTabSubject = new Subject<string>();
  selectedTab$ = this.selectedTabSubject.asObservable();
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const employeeId = params.get('id');
      if (employeeId !== null) {
        this.Detail$ = this.employeesService.getOne(employeeId);
        this.Team$ = this._teamService.getOne(employeeId);
        this.TeamAvatars$ = this._teamService.getAll();
        this.Projects$ = this._projectsService.getProjectsByEmployeeId(employeeId);

        this.Projects$.subscribe(projects => {
          console.log(projects);
        });
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