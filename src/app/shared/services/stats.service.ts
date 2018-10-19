import { UserRank } from './../models/UserRank.model';
import { BaseApiService } from './web-api.service';
import { ApiError } from './../models/ApiErro.model';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuckOff } from './../models/fuckOffs.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class StatsService extends BaseApiService {
  private static readonly STATS_API=`${BaseApiService.BASE_API}/users`

  private userRanks: Array<UserRank>
  constructor(private http: HttpClient) {
    super();
   }

   listRanks(userId: string): Observable<Array<UserRank> | ApiError> {
     return this.http.get<Array<UserRank>>(`${StatsService.STATS_API}/${userId}/stats`, BaseApiService.defaultOptions)
      .pipe(
        map((userRanks: UserRank[]) => {
          userRanks = userRanks.map(userRank => Object.assign(new UserRank(), userRank))
          this.userRanks = userRanks
          return userRanks;
        }),
        catchError(this.handleError)
      )
   }
}