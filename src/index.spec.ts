import { expect } from 'chai';
import 'mocha';

import { validate } from './index';
import * as schema from './schema.json';

describe('Validation', () => {
  it('should not validate an invalid JSON', () => {
    const invalidJSON = JSON.parse('{"differentProperty": "yo" }');
    expect(() => validate(schema, invalidJSON)).to.throw();
  });
  it('should validate a valid JSON', () => {
    const validJSON = JSON.parse('{"message": "yo" }');
    expect(validate(schema, validJSON)).to.be.deep.equal(validJSON);
  });
});
