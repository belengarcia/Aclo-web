import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-hated-card',
  templateUrl: './hated-card.component.html',
  styleUrls: ['./hated-card.component.css']
})
export class HatedCardComponent implements OnInit {
  @Input() user: User = new User();

  constructor() { }

  ngOnInit() {
  }

}
