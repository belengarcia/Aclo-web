import { ApiError } from './../models/ApiErro.model';
import { Observable, Subject } from 'rxjs';
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
  private fuckOffSubject: Subject<Array<FuckOff>> = new Subject();

  constructor(private http: HttpClient) {
    super();
  }
  
  fuckYou(userId: string): Observable<FuckOff | ApiError> {
    return this.http.post<FuckOff>(`${FuckOffsService.FUCK_OFF_API}/${userId}/fuck-offs`, {} , BaseApiService.defaultOptions)
      .pipe(
        map((fuckOff: FuckOff) => {
          Object.assign(new FuckOff(), fuckOff)
          this.notifyFuckOffChanges();
          return fuckOff;
        }),
        catchError(this.handleError)
      );
  }

  list(userId: string): Observable<Array<FuckOff> | ApiError>{
    return this.http.get<Array<FuckOff>>(`${FuckOffsService.FUCK_OFF_API}/${userId}/fuck-offs`, BaseApiService.defaultOptions)
      .pipe(
        map((fuckOffs: FuckOff[]) => {
          fuckOffs = fuckOffs.map(fuckOff => Object.assign(new FuckOff(), fuckOff))
          this.fuckOffs = fuckOffs
          return fuckOffs;
        }),
        catchError(this.handleError)
      );
  }

  fuckYouDetails(id: string, userId: string): Observable<FuckOff | ApiError>{
    return this.http.get<FuckOff>(`${FuckOffsService.FUCK_OFF_API}/${userId}/fuck-offs/${id}`, BaseApiService.defaultOptions)
    .pipe(
      map((fuckOff: FuckOff) => Object.assign(new FuckOff(), fuckOff)),
      catchError(this.handleError)
    );
  }

  fav(id: string, userId: string, fuckOff: FuckOff): Observable<FuckOff | ApiError>{
    return this.http.post<FuckOff>(`${FuckOffsService.FUCK_OFF_API}/${userId}/fuck-offs/${id}`, fuckOff, BaseApiService.defaultOptions)
      .pipe(
        map((fuckOff: FuckOff) => {
          Object.assign(new FuckOff(), fuckOff);
          this.notifyFuckOffChanges();
          return fuckOff;
        }),
        catchError(this.handleError)
      )
  }

  onFuckOffChanges(): Observable<Array<FuckOff>> {
    return this.fuckOffSubject.asObservable();
  }

  private notifyFuckOffChanges(): void {
    this.fuckOffSubject.next(this.fuckOffs);
  }

}
