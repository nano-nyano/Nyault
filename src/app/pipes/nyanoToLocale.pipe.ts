import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NyanoToLocalePipe'
})

export class NyanoToLocalePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return Number(value).toLocaleString('en-US');
  }
}
