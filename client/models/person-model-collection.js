// PersonModel Collection - person-model-collection.js
var AmpCollection = require('ampersand-collection');
var PersonModel = require('./person-model');

module.exports = AmpCollection.extend({
    model: PersonModel,
    url: '/by-first-name'
});
