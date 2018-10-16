import { FuckOff } from './../models/fuckOffs.model';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'findDestiny'
})
export class FindDestinyPipe implements PipeTransform {

  transform(fuckOffs: Array<FuckOff>, pattern: string, field: string = 'name'): Array<FuckOff> {
    if(!fuckOffs) {
      return [];
    } else if (!pattern) {
      return fuckOffs;
    }
    
    const regex = new RegExp(pattern, 'i');
    return fuckOffs.filter(f => f.destiny[field].match(regex));
  }

}
