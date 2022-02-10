import { Exception } from '../../../exceptions/src/index';

describe('BudgetBloomException', () => {
  it('should have the correct name property', () => {
    const error = new Exception('Hello, world!', null, {});

    expect(error).toHaveProperty('name');
    expect(error.name).toEqual('BudgetBloomException');
  });
});
