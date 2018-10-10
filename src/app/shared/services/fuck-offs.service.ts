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
  private static readonly FUCK_OFF_API=`${BaseApiService.BASE_API}/users/`//arreglar esto!

  private fuckOffs: Array<FuckOff> = [];
  constructor(private http: HttpClient) {
    super();
   }
  
  //Este se usa en home
  fy(user_id: String, fuckOff: FuckOff): Observable<FuckOff | ApiError> {
    return this.http.post<FuckOff>(`${FuckOffsService.FUCK_OFF_API}/${user_id}/fuck-offs`, fuckOff, BaseApiService.defaultOptions)
      .pipe(
        map((fuckOff: FuckOff) => Object.assign(new FuckOff(), fuckOff)),
        catchError(this.handleError)
      );
  }

  //este se usa en profile y myStats
  list(user_id: String): Observable<FuckOff | ApiError>{
    return this.http.get<FuckOff>(`${FuckOffsService.FUCK_OFF_API}/${user_id}/fuck-offs`, BaseApiService.defaultOptions)
      .pipe(
        map((fuckOff: FuckOff) => Object.assign(new FuckOff(), fuckOff)),
        catchError(this.handleError)
      );
  }

}
