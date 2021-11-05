import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nyanoToLocale'
})

export class nyanoToLocalePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('value: ', value, '; value.toLocaleString(): ', value.toLocaleString());
    return value.toLocaleString();
  }
}
