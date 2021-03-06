import { Pipe, PipeTransform } from '@angular/core';

function getClientLocale() {
  if (typeof Intl !== 'undefined') {
    try {
      return Intl.NumberFormat().resolvedOptions().locale;
    } catch (err) {
      console.error('Cannot get locale from Intl');
    }
  }
}

const currentLocale = getClientLocale();

function getDecimalSeparator(currentLocale_arg) {
  const numberWithDecimalSeparator = 1.1;
  return Intl.NumberFormat(currentLocale_arg)
    .formatToParts(numberWithDecimalSeparator)
    .find(part => part.type === 'decimal')
    .value;
}

const separator = getDecimalSeparator(currentLocale);

@Pipe({
  name: 'amountsplit'
})

export class AmountSplitPipe implements PipeTransform {
  transform(input: string, idx: number): string {
    const splitAmount = input.split('.')[idx];

    if (idx === 0) {
      // Integer
      return splitAmount.replace('BTC ', '');
    }

    // Fractional

    if (splitAmount == null) {
      return '';
    }

    const fractionalAmount = splitAmount.replace(/0+$/g, '');

    if (fractionalAmount === '') {
      return '';
    }

    return ( '.' + fractionalAmount );
  }
}
