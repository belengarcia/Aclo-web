import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BaseApiService } from './web-api.service';
import { ApiError } from './../models/ApiErro.model';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators'
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class SessionsService extends BaseApiService {

  private static readonly SESSIONS_API= `${BaseApiService.BASE_API}/sessions`
  private static readonly CURRENT_USER_KEY  = 'current-user';
  
  user: User;
  userSubject: Subject<User> = new Subject();

  constructor(private http: HttpClient) { 
    super();
    const userData = localStorage.getItem(SessionsService.CURRENT_USER_KEY);
    if (userData) {
      this.user = Object.assign(new User(), JSON.parse(userData));
    }
    this.notifyUserChanges();
  }

  authenticate(user: User): Observable<User | ApiError> {
    return this.http.post<User>(SessionsService.SESSIONS_API, user, BaseApiService.defaultOptions)
      .pipe(
        map((user: User) => {
          this.doAuthenticate(user);
          console.log(user)
          return user;
        }),
        catchError(this.handleError)
      )
  }

  private doAuthenticate(user: User): void {
    this.user = user;
    localStorage.setItem(SessionsService.CURRENT_USER_KEY, JSON.stringify(this.user));
    this.notifyUserChanges();
  }

  logout(): Observable<void | ApiError> {
    return this.http.delete(SessionsService.SESSIONS_API, BaseApiService.defaultOptions)
      .pipe(
        map(()=> {
          this.doLogout()}),
        catchError(this.handleError)
      );
  }

  onUserChanges(): Observable<User> {
    return this.userSubject.asObservable();
  }

  private doLogout(): void {
    this.user = null;
    localStorage.removeItem(SessionsService.CURRENT_USER_KEY);
    this.notifyUserChanges();
  }

  isAuthenticated(): boolean {
    return this.user ? true : false;
  }

  private notifyUserChanges(): void {
    this.userSubject.next(this.user);
  }

}

