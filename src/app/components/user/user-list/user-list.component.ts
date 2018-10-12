import { Subscription } from 'rxjs';
import { User } from './../../../shared/models/user.model';
import { UserService } from './../../../shared/services/user.service';
import { ApiError } from './../../../shared/models/ApiErro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('inComponent')
    this.userService.list()
      .subscribe(
        (users: User[]) => {
          this.users = users
        }
      )
  }

}
