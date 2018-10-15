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

    this.userService.list()
      .subscribe(
        (users: User[]) => {
          console.log(users)
          this.users = users;
        }
      )
  }

}

// list(): Observable<Array<User> | ApiError> {
//   return this.http.get<Array<User>>(UserService.USER_API, BaseApiService.defaultOptions)
//     .pipe(
//       map((users: Array<User>) => {
//         users = users.map(user => Object.assign(new User(), user));
//         this.users = users;
//         return users;
//       }),
//       catchError(this.handleError)
//     );
// }