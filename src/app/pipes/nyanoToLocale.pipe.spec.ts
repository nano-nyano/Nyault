import { NyanoToLocale } from './nyanoToLocale.pipe';

describe('nyanoToLocale', () => {
  it('create an instance', () => {
    const pipe = new NyanoToLocale();
    expect(pipe).toBeTruthy();
  });
});
