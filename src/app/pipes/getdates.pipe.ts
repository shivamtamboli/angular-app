import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getdates'
})
export class GetdatesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value*1000;
  }

}
