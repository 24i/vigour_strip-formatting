# strip-formatting

<!-- VDOC.badges travis; standard; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/strip-formatting.svg?branch=master)](https://travis-ci.org/vigour-io/strip-formatting)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/strip-formatting.svg)](https://badge.fury.io/js/strip-formatting)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/strip-formatting/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/strip-formatting?branch=master)

<!-- VDOC END -->

<!-- VDOC.jsdoc stripFormatting -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var stripped = stripFormatting(val)

Removes leading whitespace from each line of input
- **val** (*string*) - The string to strip formatting from

<!-- VDOC END -->

```javascript
var stripFormatting = require('strip-formatting')
stripFormatting(`
<html>
  <head>
    <title>whatever</title>
  </head>
  ...
`)
```