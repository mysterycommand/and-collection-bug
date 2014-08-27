// PersonModel Model - person-model.js
var AmpState = require('ampersand-state');

module.exports = AmpState.extend({
    idAttribute: 'ssn',
    props: {
        ssn: {
            type: 'string',
            required: true,
            allowNull: false,
            setOnce: true
        },
        firstName: {
            type: 'string',
            required: true,
            allowNull: false,
            setOnce: true
        },
        lastName: {
            type: 'string',
            required: true,
            allowNull: false,
            setOnce: true
        }
    }
});
