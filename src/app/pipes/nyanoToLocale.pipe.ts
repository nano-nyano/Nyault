import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nyanoToLocale'
})

export class nyanoToLocalePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('typeof: ', typeof parseInt(value), 'value: ', value, '; parseInt(value).toLocaleString(): ', parseInt(value).toLocaleString(), 'typeof: ', typeof value.toLocaleString(), '; numValue: ', number(value).toLocaleString());
    return parseInt(value).toLocaleString();
  }
}
