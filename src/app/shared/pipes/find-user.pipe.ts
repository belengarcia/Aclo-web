import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'findUser'
})
export class FindUserPipe implements PipeTransform {

  transform(users: Array<User>, pattern: string, field: string = 'name'): Array<User> {
    if(!users) {
      return [];
    } else if (!pattern) {
      return users;
    }
    
    const regex = new RegExp(pattern, 'i');
    return users.filter(f => f[field].match(regex));
  }

}
