import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'more'
})
export class MorePipe implements PipeTransform {

  transform(text:string, limit?: number)
  {
    if (text.length == 0) return null;

    const vraiLimit =  (limit) ? limit : 50;
    
    return text.substr(0,vraiLimit);
  }

}
