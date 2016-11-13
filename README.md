[![Build Status](https://travis-ci.org/customcommander/coins.js.svg?branch=master)](https://travis-ci.org/customcommander/coins.js)

# coins.js
Utility Library For COinS (ContextObjects in Spans)

### Developing

Good old `make` is used for managing the development life cycle:

0.  `make lint`

    Makes sure that all JavaScript complies with the coding standards.

0.  `make test`

    Runs tests in both environments (Node & Browser).
    It also produces a combined code coverage report.

0.  `make dist`

    Runs both `lint` and `test` targets and packages files for release.
    Changes in the `dist` directory should be checked in.
