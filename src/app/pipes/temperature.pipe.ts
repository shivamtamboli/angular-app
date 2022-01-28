import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Math.round(value-273);
  }

}
