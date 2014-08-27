// PersonModel Model - person-model.js
var AmpState = require('ampersand-state');

module.exports = AmpState.extend({
    idAttribute: 'firstName',
    props: {
        firstName: ['string'],
        lastName: ['string']
    }
});
