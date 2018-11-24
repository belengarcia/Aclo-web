import { FuckOff } from './../../../shared/models/fuckOffs.model';
import { User } from './../../../shared/models/user.model';
import { FuckOffsService } from './../../../shared/services/fuck-offs.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-outsider',
  templateUrl: './user-outsider.component.html',
  styleUrls: ['./user-outsider.component.css']
})
export class UserOutsiderComponent implements OnInit {
  @Input() user: User = new User; 
  fuckOff: FuckOff;

  constructor(
    private router: Router,
    private fuckOffsService: FuckOffsService
  ) { }
  
  onClickSendFuckOff(registerForm: FormGroup): void {
    this.fuckOffsService.fuckYou(this.user.id)
      .subscribe(
        (fuckOff: FuckOff) => {
          registerForm.reset();
          this.router.navigate([`/destinies/${fuckOff.id}`]);
        }
      )
  }

  ngOnInit() {
  }

}
