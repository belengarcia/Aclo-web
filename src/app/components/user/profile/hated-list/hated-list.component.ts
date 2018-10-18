import { UserService } from './../../../../shared/services/user.service';
import { SessionsService } from './../../../../shared/services/sessions.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-hated-list',
  templateUrl: './hated-list.component.html',
  styleUrls: ['./hated-list.component.css']
})
export class HatedListComponent implements OnInit {

  user: User = new User();
  users: User[];

  constructor(private sessionsService: SessionsService, private userService: UserService) { }

  ngOnInit() {
    this.user = this.sessionsService.user;

    this.userService.hatedList()
      .subscribe(
        (users: User[]) => {
          console.log(users)
          this.users = users;
        }
      )
  }

}

// arrayVehiculosFilterBySerie.reduce(function (prev, current) {//Don't add the same Series twice
// if (prev.indexOf(current[1]) == -1) {
//     prev.push(current[1])
//     common.addOptionSelect("selectModelo", current[6], current[1])
// }
// return prev;
// }, []); 