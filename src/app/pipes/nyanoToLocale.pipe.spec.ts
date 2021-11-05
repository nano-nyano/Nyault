import { nyanoToLocalePipe } from './nyanoToLocale.pipe';

describe('nyanoToLocalePipe', () => {
  it('create an instance', () => {
    const pipe = new nyanoToLocalePipe();
    expect(pipe).toBeTruthy();
  });
});
