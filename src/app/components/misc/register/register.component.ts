import { UserService } from './../../../shared/services/user.service';
import { ApiError } from './../../../shared/models/ApiErro.model';
import { User } from '../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = new User();
  apiError: ApiError;

  constructor(private userService: UserService, private router: Router) { }

  onSubmitRegister(registerForm: FormGroup): void {
    if(registerForm.valid){
      this.userService.create(this.user)
        .subscribe(
          () => {
            registerForm.reset();
            this.router.navigate(['/']);
          },
          (error: ApiError) => this.apiError = error
        );
    }
  }

}
