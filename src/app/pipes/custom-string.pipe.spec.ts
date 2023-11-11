import { CustomStringPipe } from './custom-string.pipe';

describe('CustomStringPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomStringPipe();
    expect(pipe).toBeTruthy();
  });
});
