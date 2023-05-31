import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from 'src/app/models/team.model';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamDetailComponent {

  readonly TeamDetail$: Observable<TeamModel>= this._teamsService.getOne('id')

  constructor(private _teamsService: TeamsService) {}
}
