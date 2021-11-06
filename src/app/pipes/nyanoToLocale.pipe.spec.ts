import { nyanoToLocale } from './nyanoToLocale.pipe';

describe('nyanoToLocale', () => {
  it('create an instance', () => {
    const pipe = new nyanoToLocale();
    expect(pipe).toBeTruthy();
  });
});
