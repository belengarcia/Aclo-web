import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

// transform(fuckOffs: FuckOff[]): FuckOff[] {
//   if(!fuckOffs) {
//     return [];
//   }
//   return fuckOffs.filter(f => f.fav === true);
// }