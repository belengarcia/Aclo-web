import { FuckOff } from './../../shared/models/fuckOffs.model';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FuckOffsService } from './../../shared/services/fuck-offs.service';
import { ApiError } from './../../shared/models/ApiErro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fuckOff: FuckOff = new FuckOff();
  apiError: ApiError;
  userId: String; //de donde lo saco?

  constructor(private fuckOffsService: FuckOffsService, private router: Router) { }

  ngOnInit() {
  }

  onClickShitButton(form: FormGroup): void {
    if(form.valid){
      this.fuckOffsService.fy(this.userId, this.fuckOff)
        .subscribe(
          () => {
            form.reset()
            this.router.navigate(['/destinies'])
          }
        )
    }
  }

}
