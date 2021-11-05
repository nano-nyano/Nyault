import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nyanoToLocale'
})

export class nyanoToLocalePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('typeof: ', typeof value, 'value: ', value, '; value.toLocaleString(): ', value.toLocaleString(), 'typeof: ', typeof value.toLocaleString());
    return value.toLocaleString();
  }
}
