import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'hatesFilter'
})
export class HatesFilterPipe implements PipeTransform {

  transform(users: User[]): User[] {
    if (!users) {
      return [];
    }
    return users
  }

}

// transform(fuckOffs: FuckOff[]): FuckOff[] {
//   if(!fuckOffs) {
//     return [];
//   }
//   return fuckOffs.filter(f => f.fav === true);
// }