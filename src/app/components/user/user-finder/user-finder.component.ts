import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-finder',
  templateUrl: './user-finder.component.html',
  styleUrls: ['./user-finder.component.css']
})
export class UserFinderComponent {
  @Output() changePattern: EventEmitter<string> = new EventEmitter()
;
  constructor() { }

  onChangePattern(pattern: string) {
    this.changePattern.emit(pattern);
  }

}
