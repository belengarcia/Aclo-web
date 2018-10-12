import { Router } from '@angular/router';
import { User } from './../../../shared/models/user.model';
import { UserService } from './../../../shared/services/user.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: User = new User();
  constructor(private router: Router) { }

  onClickUser(): void {
    this.router.navigate(['/phones', this.user.id]);

  }
}
