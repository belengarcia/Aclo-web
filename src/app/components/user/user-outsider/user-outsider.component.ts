import { SessionsService } from './../../../shared/services/sessions.service';
import { FuckOff } from './../../../shared/models/fuckOffs.model';
import { User } from './../../../shared/models/user.model';
import { FuckOffsService } from './../../../shared/services/fuck-offs.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup} from '@angular/forms';
import { ApiError } from './../../../shared/models/ApiErro.model';


@Component({
  selector: 'app-user-outsider',
  templateUrl: './user-outsider.component.html',
  styleUrls: ['./user-outsider.component.css']
})
export class UserOutsiderComponent {
  user: User = new User; 
  fuckOff: FuckOff = new FuckOff;
  apiError: ApiError;



  constructor(
    private router: Router,
    private fuckOffsService: FuckOffsService,
    private sessionsService: SessionsService
  ) { }

  ngOnInit() {
    this.user = this.sessionsService.user
  }
  
  onClickSendFuckOff(registerForm: FormGroup): void {
    const outsider = this.fuckOff.outsider
    this.fuckOffsService.fuckOutsider(this.user.id, outsider)
      .subscribe(
        (fuckOff: FuckOff) => {
          registerForm.reset();
          this.router.navigate([`/destinies/${fuckOff.id}`]);
        },
        (error: ApiError) => this.apiError = error
      )
  }

}

