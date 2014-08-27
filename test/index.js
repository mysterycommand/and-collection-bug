'use strict';

var expect = require('chai').expect;

var PersonModel = require('../client/models/person-model');

describe('PersonModel', function() {
    it('should exist', function() {
        expect(PersonModel).to.exist;
    });
});
