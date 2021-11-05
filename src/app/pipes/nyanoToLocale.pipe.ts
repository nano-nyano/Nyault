import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nyanoToLocale'
})

export class nyanoToLocalePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return Number(value).toLocaleString("en-US");
  }
}
