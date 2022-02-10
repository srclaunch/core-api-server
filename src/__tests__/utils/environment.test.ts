import { getEnvironment } from '../../utils/environment';

describe('getEnvironment()', () => {
  it('should return the correct environment when running locally', () => {
    expect(getEnvironment()).toBe('test');
  });
});
