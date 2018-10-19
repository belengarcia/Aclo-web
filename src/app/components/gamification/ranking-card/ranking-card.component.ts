import { SessionsService } from './../../../shared/services/sessions.service';
import { StatsService } from './../../../shared/services/stats.service';
import { UserRank } from './../../../shared/models/UserRank.model';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-ranking-card',
  templateUrl: './ranking-card.component.html',
  styleUrls: ['./ranking-card.component.css']
})
export class RankingCardComponent implements OnInit {
  @Input() userRank: UserRank = new UserRank();
  user: User = new User();

  constructor(private statsService: StatsService, private sessionsService: SessionsService) { }

  ngOnInit() {
    this.user = this.sessionsService.user
  }

}
