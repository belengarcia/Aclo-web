import { SessionsService } from './../../../shared/services/sessions.service';
import { StatsService } from './../../../shared/services/stats.service';
import { ApiError } from './../../../shared/models/ApiErro.model';
import { UserRank } from './../../../shared/models/UserRank.model';
import { Component, OnInit } from '@angular/core';
import { User } from './../../../shared/models/user.model'


@Component({
  selector: 'app-ranking-runners-list',
  templateUrl: './ranking-runners-list.component.html',
  styleUrls: ['./ranking-runners-list.component.css']
})
export class RankingRunnersListComponent implements OnInit {

  usersRank : Array<UserRank> = [];
  user: User;
  
  constructor(private statsService: StatsService, private sessionsService: SessionsService) { }

  ngOnInit() {
      this.user = this.sessionsService.user;
      this.statsService.listRanks(this.user.id)
        .subscribe(
          (usersRank: UserRank[]) => {
            this.usersRank = usersRank;
          }
        )
  }

}
