'use strict';
const expect = require('chai').expect;

const add = require('../dist/index').add;
const queryParameter = require('../dist/index').queryParameter;

describe('add function test', () => {
    it('should return 2', () => {
        const result = add(1, 1);
        expect(result).to.equal(2);
    });
});

describe('queryParameter function test', () => {
    const url = 'https://github.com/tanbing0809/test#123?name=tanbing';
    it('Hash should return 123', () => {
        const result = queryParameter(url).HASH;
        expect(result).to.equal('123');
    });
    it('name should return tanbing', () => {
        const result = queryParameter(url).name;
        expect(result).to.equal('tanbing');
    });
});