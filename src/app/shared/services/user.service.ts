import { ApiError } from './../models/ApiErro.model';
import { BaseApiService } from './web-api.service';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { catchError, map} from 'rxjs/operators'

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService {
  private static readonly USER_API = `${BaseApiService.BASE_API}/users`

  private users: Array<User> = [];

  private usersSubject: Subject<Array<User>> = new Subject();

  constructor(private http: HttpClient) {
    super();
   }

  create(user: User): Observable<User | ApiError> {
    return this.http.post<User>(UserService.USER_API, user, BaseApiService.defaultOptions)
      .pipe(
        map((user: User) => Object.assign(new User(), user)),
        catchError(this.handleError)
      );
  }

  list(): Observable<Array<User> | ApiError> {
    return this.http.get<Array<User>>(UserService.USER_API, BaseApiService.defaultOptions)
      .pipe(
        map((users: Array<User>) => {
          users = users.map(user => Object.assign(new User(), user));
          this.users = users;
          return users;
        }),
        catchError(this.handleError)
      );
  }

  get(id: string): Observable<User | ApiError> {
    return this.http.get<User>(`${UserService.USER_API}/${id}`, BaseApiService.defaultOptions)
      .pipe(
        map((user: User) => Object.assign(new User(), user)),
        catchError(this.handleError)
      );
  }


}