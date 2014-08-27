'use strict';

var expect = require('chai').expect;

var badJson = require('./mock/bad.json');
var goodJson = require('./mock/good.json');

var PersonModel = require('../client/models/person-model');
var PersonCollection = require('../client/models/person-model-collection');

describe('PersonModel', function() {
    it('should exist', function() {
        /* jshint expr: true */
        expect(PersonModel).to.exist;
    });

    it.skip('should throw when required props are not present', function() {
        expect(new PersonModel({})).to.throw(Error);
    });
});

describe('PersonCollection', function() {
    it('should exist', function() {
        /* jshint expr: true */
        expect(PersonCollection).to.exist;
    });

    it.skip('should index by it\'s model\'s `idAttribute` if one is specified', function() {
        expect(new PersonCollection(goodJson)).to.have.property('length', 2);
        expect(new PersonCollection(badJson)).to.have.property('length', 3); // should actually be 2, or throw, but see above
    });
});
