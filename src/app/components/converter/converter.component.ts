import { Component, OnInit, OnDestroy } from '@angular/core';
import {UtilService} from '../../services/util.service';
import {AppSettingsService} from '../../services/app-settings.service';
import * as nanocurrency from 'nanocurrency';
import {PriceService} from '../../services/price.service';
import { BigNumber } from 'bignumber.js';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.less']
})
export class ConverterComponent implements OnInit, OnDestroy {
  nyano = '1';
  raw = '';
  invalidMnano = false;
  invalidRaw = false;
  invalidFiat = false;
  fiatPrice = '0';
  priceSub = null;

  constructor(
    private util: UtilService,
    public settings: AppSettingsService,
    private price: PriceService,
    public notifications: NotificationService,
  ) { }

  ngOnInit(): void {
    BigNumber.config({ DECIMAL_PLACES: 21 });
    this.nyano = '1';

    this.priceSub = this.price.lastPrice$.subscribe(event => {
      this.fiatPrice = (new BigNumber(this.nyano)).times(this.price.price.lastPrice).toString();
    });

    this.unitChange('nyano');
  }

  ngOnDestroy() {
    if (this.priceSub) {
      this.priceSub.unsubscribe();
    }
  }

  unitChange(unit) {
    switch (unit) {
      case 'nyano':
        if (this.util.account.isValidNanoAmount(this.nyano)) {
          this.raw = new BigNumber(this.nyano).shift(21).toFixed(0);
          this.fiatPrice = (new BigNumber(this.nyano)).times(this.price.price.lastPrice).toString(10);
          this.invalidMnano = false;
          this.invalidRaw = false;
          this.invalidFiat = false;
        } else {
          this.raw = '';
          this.fiatPrice = '';
          this.invalidMnano = true;
        }
        break;
      case 'raw':
        if (this.util.account.isValidAmount(this.raw)) {
          this.nyano = new BigNumber(this.nyano).shift(-21).toFixed(0);
          this.fiatPrice = (new BigNumber(this.nyano)).times(this.price.price.lastPrice).toString(10);
          this.invalidRaw = false;
          this.invalidMnano = false;
          this.invalidFiat = false;
        } else {
          this.nyano = '';
          this.fiatPrice = '';
          this.invalidRaw = true;
        }
        break;
      case 'fiat':
        if (this.util.string.isNumeric(this.fiatPrice)) {
          this.nyano = (new BigNumber(this.fiatPrice)).dividedBy(this.price.price.lastPrice).toString(10);
          this.raw = new BigNumber(this.nyano).shift(21).toFixed(0);
          this.invalidRaw = false;
          this.invalidMnano = false;
          this.invalidFiat = false;
        } else {
          this.nyano = '';
          this.raw = '';
          this.invalidFiat = true;
        }
        break;
    }
  }

}
