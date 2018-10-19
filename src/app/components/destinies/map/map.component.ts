import { SessionsService } from './../../../shared/services/sessions.service';
import { ActivatedRoute } from '@angular/router';
import { FuckOffsService } from './../../../shared/services/fuck-offs.service';
import { FuckOff } from './../../../shared/models/fuckOffs.model';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  fuckOff: FuckOff = new FuckOff();
  user: User = new User;


  title: string = 'Destiny Map';
  lat: number;
  lng: number;


  constructor(
    private fuckOffsService: FuckOffsService,
    private route: ActivatedRoute,
    private sessionsService: SessionsService
  ) { }

  ngOnInit() {
    this.user = this.sessionsService.user;

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.fuckOffsService.fuckYouDetails(id, this.user.id)
        .subscribe(
          (fuckOff: FuckOff) => {
            let n = 1;
            this.fuckOff = fuckOff
            this.lat = fuckOff.destiny.coordinates[0];
            this.lng = fuckOff.destiny.coordinates[n];
          }
        );
    });
  }

}