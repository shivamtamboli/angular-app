import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getday'
})
export class GetdayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value*1000;
  }

}
