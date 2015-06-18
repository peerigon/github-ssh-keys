'use strict';

var fetchKeys = require('../index');

fetchKeys('flootr')
    .then(console.log)
    .catch(console.error);

Promise.all(['jhnns', 'meaku', 'topa', 'matthaias', 'sbat', 'flootr'].map(fetchKeys))
    .then(console.log)
    .catch(console.error);