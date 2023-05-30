import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TeamModel } from '../../models/team.model';
import { TeamsService } from '../../services/teams.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsComponent {
  readonly teamList$: Observable<TeamModel[]> = this._teamsService.getAll();

  constructor(private _teamsService: TeamsService) {
  }
}
