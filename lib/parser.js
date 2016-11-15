function parseQueryString(str) {
    return str.split('&').reduce(function (reduced, pair) {
        pair = pair.split('=');
        reduced[pair[0]] = pair[1];
        return reduced;
    }, {});
}

module.exports = {
    parseQueryString: parseQueryString
};
