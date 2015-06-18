#!/usr/bin/env node

'use strict';

var fetchKeys = require('../index');
var argv = require('minimist')(process.argv.slice(2), {boolean: true});

Promise.all(argv._.map(fetchKeys))
    .then(function (res) {
        if (argv.format) {
            res.map(function (user) {
                console.log(user.keys.join('\n'));
            });
        } else {
            console.log(res);
        }
    })
    .catch(function (err) {
        console.error(err.message);
    });