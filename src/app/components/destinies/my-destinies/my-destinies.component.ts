import { SessionsService } from './../../../shared/services/sessions.service';
import { FuckOffsService } from './../../../shared/services/fuck-offs.service';
import { FuckOff } from './../../../shared/models/fuckOffs.model';
import { Subscription } from 'rxjs';
import { User } from './../../../shared/models/user.model';
import { ApiError } from './../../../shared/models/ApiErro.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-destinies',
  templateUrl: './my-destinies.component.html',
  styleUrls: ['./my-destinies.component.css']
})
export class MyDestiniesComponent implements OnInit {

  fuckOffs: Array<FuckOff> = [];
  user: User = new User();
  onFuckOffChangesSubscription: Subscription; 

  finderPattern: string;


  constructor(private fuckOffsService: FuckOffsService, private sessionsService: SessionsService) { }

  ngOnInit() {
    this.user = this.sessionsService.user;

    // this.getFuckOffs();
    this.fuckOffsService.list(this.user.id)
    .subscribe(
      (fuckOffs: FuckOff[]) => {
        this.fuckOffs = fuckOffs
      }
    )
    
    // this.onFuckOffChangesSubscription = this.fuckOffsService.onFuckOffChanges()
    //     .subscribe((fuckOffs: Array<FuckOff>) => {
    //       this.getFuckOffs()
    //     });
  }

  // private getFuckOffs() {
  //   this.fuckOffsService.list(this.user.id)
  //     .subscribe(
  //       (fuckOffs: FuckOff[]) => {
  //         this.fuckOffs = fuckOffs
  //       }
  //     )
  // }
  

  ngOnDestroy(): void {
    this.onFuckOffChangesSubscription.unsubscribe();
  }

  onPatternChange(pattern: string) {
    this.finderPattern = pattern;
  }
}
