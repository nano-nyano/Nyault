import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nyanoToLocale'
})

export class nyanoToLocalePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('Number(value).toLocaleString(): ', Number(value).toLocaleString());
    return Number(value).toLocaleString();
  }
}
