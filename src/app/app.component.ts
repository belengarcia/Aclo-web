import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { interval } from "rxjs/internal/observable/interval";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMario: boolean = false;

  constructor() {}

  ngOnInit() {
    interval(20000).subscribe(() => {
      this.showMario = true;
      setTimeout(() => {
        this.showMario = false;
      }, 2000);
    });
  }

}
