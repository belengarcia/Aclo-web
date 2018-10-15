import { FuckOff } from './../../../shared/models/fuckOffs.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destinies-card',
  templateUrl: './destinies-card.component.html',
  styleUrls: ['./destinies-card.component.css']
})
export class DestiniesCardComponent implements OnInit {
  @Input() fuckOff: FuckOff = new FuckOff();

  constructor() { }

  ngOnInit() {
  }

}
