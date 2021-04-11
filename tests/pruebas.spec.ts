import 'mocha';
import { expect } from 'chai';
import { add } from '../src/pruebas';

describe('add tests', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).to.be.eq(5);
  });
});
