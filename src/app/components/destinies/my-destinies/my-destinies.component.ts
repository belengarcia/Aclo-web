import { SessionsService } from './../../../shared/services/sessions.service';
import { FuckOffsService } from './../../../shared/services/fuck-offs.service';
import { FuckOff } from './../../../shared/models/fuckOffs.model';
import { Subscription } from 'rxjs'; //lo necesitaremos
import { User } from './../../../shared/models/user.model';
import { ApiError } from './../../../shared/models/ApiErro.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-destinies',
  templateUrl: './my-destinies.component.html',
  styleUrls: ['./my-destinies.component.css']
})
export class MyDestiniesComponent implements OnInit {

  fuckOffs: Array<FuckOff> = [];
  user: User = new User();

  finderPattern: string;


  constructor(private fuckOffsService: FuckOffsService, private sessionsService: SessionsService) { }

  ngOnInit() {
    this.user = this.sessionsService.user;

    this.fuckOffsService.list(this.user.id)
      .subscribe(
        (fuckOffs: FuckOff[]) => {
          this.fuckOffs = fuckOffs
          console.log(this.fuckOffs)
        }
      )
  }

  onPatternChange(pattern: string) {
    this.finderPattern = pattern;
  }
}
