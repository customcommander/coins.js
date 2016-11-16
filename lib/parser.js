function isQueryString(str) {
    var qryRe = /^[a-z_.]+=[^&]+(?:&[a-z_.]+=[^&]+)*$/i;
    return qryRe.test(str);
}

function parseHtml(html) {
    var titleRe = /title="([^"]+)"/g;
    var match = titleRe.exec(html);
    var matches = [];

    while (match) {
        matches.push(match[1].trim().replace(/&amp;/g, '&'));
        match = titleRe.exec(html);
    }

    return matches.reduce(function (reduced, cur) {
        if (isQueryString(cur)) {
            reduced.push(parseQueryString(cur));
        }
        return reduced;
    }, []);
}

function parseQueryString(str) {
    return str.split('&').reduce(function (reduced, pair) {
        pair = pair.split('=');
        reduced[pair[0]] = pair[1];
        return reduced;
    }, {});
}

function parser(str) {
    if (isQueryString(str)) {
        return [parseQueryString(str)];
    } else {
        return parseHtml(str);
    }
}

module.exports = parser;
