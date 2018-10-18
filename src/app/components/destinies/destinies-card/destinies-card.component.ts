import { User } from 'src/app/shared/models/user.model';
import { SessionsService } from './../../../shared/services/sessions.service';
import { FuckOffsService } from './../../../shared/services/fuck-offs.service';
import { ActivatedRoute } from '@angular/router';
import { FuckOff } from './../../../shared/models/fuckOffs.model';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-destinies-card',
  templateUrl: './destinies-card.component.html',
  styleUrls: ['./destinies-card.component.css']
})
export class DestiniesCardComponent implements OnInit {
  @Input() fuckOff: FuckOff = new FuckOff();
  user: User = new User();

  constructor(private route : ActivatedRoute, private fuckOffsService: FuckOffsService, private sessionsService: SessionsService) { }

  ngOnInit() {
    this.user = this.sessionsService.user
  }

  onClickFav(): void {

    this.route.paramMap.subscribe(() => {
      const id = this.fuckOff.id
      this.fuckOffsService.fav(id, this.user.id, this.fuckOff)
      .subscribe(
        (fuckOff: FuckOff) => {
          this.fuckOff = fuckOff
        }
      );
    });
  } 

}
