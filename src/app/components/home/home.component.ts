import { SessionsService } from './../../shared/services/sessions.service';
import { User } from './../../shared/models/user.model';
import { FuckOff } from './../../shared/models/fuckOffs.model';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FuckOffsService } from './../../shared/services/fuck-offs.service';
import { ApiError } from './../../shared/models/ApiErro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiError: ApiError;
  user: User; 
  clicked: boolean = false;

  constructor(
    private sessionsService: SessionsService,
    private fuckOffsService: FuckOffsService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.sessionsService.user;
  }

  onClickShitButton(): void {
      this.clicked = true;
      this.fuckOffsService.fuckYou(this.user.id)
        .subscribe(
          (fuckOff: FuckOff) => {
            this.router.navigate([`/destinies/${fuckOff.id}`])
          }
        )
  }
}
