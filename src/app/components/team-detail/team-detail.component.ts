import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamModel } from 'src/app/models/team.model';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamDetailComponent implements OnInit{

  teamId: string | null = null;
  TeamDetail$: Observable<TeamModel> = this._teamsService.getOne('id');
  Avatars$: Observable<TeamModel[]> = this._teamsService.getAll();
  constructor(
    private _teamsService: TeamsService,
    private route: ActivatedRoute
  ) {}




  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.teamId = params.get('id');

      if (this.teamId !== null) {
        this.TeamDetail$ = this._teamsService.getOne(this.teamId);
        this.Avatars$ = this._teamsService.getAll();
      }
    });
  }
}
