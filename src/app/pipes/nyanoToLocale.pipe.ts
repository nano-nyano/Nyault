import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nyanoToLocale'
})

export class nyanoToLocale implements PipeTransform {
  transform(value: any, args?: any): any {
    return Number(value).toLocaleString("en-US", {maximumFractionDigits: 0});
  }
}
