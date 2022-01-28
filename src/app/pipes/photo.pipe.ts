import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photo'
})
export class PhotoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `https://openweathermap.org/img/wn/${value}@2x.png`
  }

}
