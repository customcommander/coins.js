var parser = require('./parser');

function coins(thing) {
    var result = [];

    if (typeof thing === 'string') {
        result = parser(thing.trim());
    }

    if (!result.length) {
        return null;
    }

    return result.map(function (res) {
        return {raw: res};
    });
}

module.exports = coins;
