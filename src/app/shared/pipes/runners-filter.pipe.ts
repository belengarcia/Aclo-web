import { FuckOff } from './../models/fuckOffs.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runnersFilter'
})
export class RunnersFilterPipe implements PipeTransform {

  transform(fuckOffs: FuckOff[]): FuckOff[] {
    if(!fuckOffs) {
      return [];
    }
    let filterId = fuckOffs.map(f => f.id)
    return fuckOffs
  }

}


// transform(fuckOffs: FuckOff[]): FuckOff[] {
//   if(!fuckOffs) {
//     return [];
//   }
//   return fuckOffs.filter(f => f.fav === true);
// }

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);