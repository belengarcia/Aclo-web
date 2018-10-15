import { User } from '../../../shared/models/user.model';
import { UserService } from './../../../shared/services/user.service';
import { SessionsService } from './../../../shared/services/sessions.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = new User();

  constructor(
    private router: Router,
    private sessionsService: SessionsService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.get(this.sessionsService.user.id)
      .subscribe(
        (user: User) => this.user = user
      );
  }

  onClickLogout(): void {
    this.sessionsService.logout().subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
