import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountsplit'
})

function getClientLocale() {
  if (typeof Intl !== 'undefined') {
    try {
      return Intl.NumberFormat().resolvedOptions().locale;
    } catch (err) {
      console.error("Cannot get locale from Intl")
    }
  }
}

function getDecimalSeparator(getClientLocale()) {
    const numberWithDecimalSeparator = 1.1;
    return Intl.NumberFormat(locale)
        .formatToParts(numberWithDecimalSeparator)
        .find(part => part.type === 'decimal')
        .value;
}

export class AmountSplitPipe implements PipeTransform {
  transform(input: string, idx: number): string {
    const splitAmount = input.split(getDecimalSeparator())[idx];

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
