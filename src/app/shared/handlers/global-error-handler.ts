import { ApiError } from './../models/ApiErro.model';
import { SessionsService } from './../services/sessions.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler} from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class GlobalErrorHandlerService implements ErrorHandler {
  
    constructor(
      private sessionService: SessionsService) { }
  
    handleError(error: ApiError | Error | HttpErrorResponse) {
      if (error instanceof ApiError && error.status === 403) {
        this.sessionService.logout()
          .subscribe(() => {
            window.location.href = '/login';
          });
      } else if (error instanceof ApiError && error.status === 404){
        window.location.href = '/404'
      } 
      // else if (error instanceof ApiError && error.status === 500){
      //   window.location.href = 'ups'
      // }
    }
  }


