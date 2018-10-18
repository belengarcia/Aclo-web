import { SessionsService } from './../../../shared/services/sessions.service';
import { FuckOff } from './../../../shared/models/fuckOffs.model';
import { FuckOffsService } from './../../../shared/services/fuck-offs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-destiny-details',
  templateUrl: './destiny-details.component.html',
  styleUrls: ['./destiny-details.component.css']
})
export class DestinyDetailsComponent implements OnInit {
  fuckOff: FuckOff;
  user: User = new User()

  constructor(
    private fuckOffsService: FuckOffsService, 
    private route: ActivatedRoute, 
    private sessionsService: SessionsService,
  ) { }

  ngOnInit() {
    this.user = this.sessionsService.user;
    
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.fuckOffsService.fuckYouDetails(id, this.user.id)
        .subscribe(
          (fuckOff: FuckOff) => this.fuckOff = fuckOff
        );
    });
  }

  onClickFav(): void {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.fuckOffsService.fav(id, this.user.id, this.fuckOff)
      .subscribe(
        (fuckOff: FuckOff) => {
          this.fuckOff = fuckOff
        }
      );
    });
  } 
}
