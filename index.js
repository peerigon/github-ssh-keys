'use strict';

var request = require('request');

function fetchKeys(username) {
    return new Promise(function (resolve, reject) {
        request(`https://github.com/${username}.keys`, function (err, res, body) {
            if (err) {
                reject(err);
                return;
            }

            if (res.statusCode >= 300) {
                err = new Error('Response with status code: ' + res.statusCode);
                err.statuscode = res.statusCode;
                reject(err);
                return;
            }

            resolve({
                username: username,
                keys: body.split('\n')
            });
        });
    });
}

module.exports = fetchKeys;