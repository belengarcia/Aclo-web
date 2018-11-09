import { FormGroup } from '@angular/forms';
import { ApiError } from './../../../shared/models/ApiErro.model';
import { SessionsService } from './../../../shared/services/sessions.service';
import { Component } from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  user: User = new User();
  apiError: ApiError;

  constructor(
    private sessionsService: SessionsService, 
    private router: Router
  ) { }

  onSubmitLogin(loginForm: FormGroup): void {
    if (loginForm.valid) {
      this.sessionsService.authenticate(this.user)
        .subscribe(
          () => {
            this.user = this.sessionsService.user;
            loginForm.reset();
            this.router.navigate([`/users/${this.user.id}`]);
          }, 
          (error: ApiError) => this.apiError = error
        );
    }
  }
}
