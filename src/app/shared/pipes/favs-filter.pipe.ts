import { FuckOff } from './../models/fuckOffs.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favsFilter'
})
export class FavsFilterPipe implements PipeTransform {

  transform(fuckOffs: FuckOff[]): FuckOff[] {
      if(!fuckOffs) {
        return [];
      }
      return fuckOffs.filter(f => f.fav === true);
  }

}