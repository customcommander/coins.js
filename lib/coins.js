var parser = require('./parser');

function coins(thing) {
    var result;

    if (typeof thing === 'string') {
        result = parser.parseQueryString(thing);
    }

    return [{
        raw: result
    }];
}

module.exports = coins;
