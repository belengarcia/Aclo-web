import { ApiError } from './../models/ApiErro.model';
import { Observable } from 'rxjs';
import { FuckOff } from './../models/fuckOffs.model';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './web-api.service';
import { Injectable } from '@angular/core';
import { catchError, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FuckOffsService extends BaseApiService{
  private static readonly FUCK_OFF_API=`${BaseApiService.BASE_API}/users`
  private fuckOffs: Array<FuckOff> = [];

  constructor(private http: HttpClient) {
    super();
  }
  
  //Este se usa en home
  fuckYou(userId: String): Observable<FuckOff | ApiError> {
    return this.http.post<FuckOff>(`${FuckOffsService.FUCK_OFF_API}/${userId}/fuck-offs`, {}, BaseApiService.defaultOptions)
      .pipe(
        map((fuckOff: FuckOff) => Object.assign(new FuckOff(), fuckOff)),
        catchError(this.handleError)
      );
  }

  //este se usa en profile y myStats
  list(userId: String): Observable<FuckOff | ApiError>{
    return this.http.get<FuckOff>(`${FuckOffsService.FUCK_OFF_API}/${userId}/fuck-offs`, BaseApiService.defaultOptions)
      .pipe(
        map((fuckOff: FuckOff) => Object.assign(new FuckOff(), fuckOff)),
        catchError(this.handleError)
      );
  }

  fuckYouDetails(id: String, userId: String): Observable<FuckOff | ApiError>{
    return this.http.get<FuckOff>(`${FuckOffsService.FUCK_OFF_API}/${userId}/fuck-offs/${id}`, BaseApiService.defaultOptions)
    .pipe(
      map((fuckOff: FuckOff) => Object.assign(new FuckOff(), fuckOff)),
      catchError(this.handleError)
    );
  }

}
