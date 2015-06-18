'use strict';

var expect = require('chai').expect;
var fetchKey = require('../index');

describe("github-fetch-keys", function () {

    describe('fetchKeys()', function () {

        it('should throw a 404 if a user does not exist on github', function () {
            return fetchKey('hopefully-this-user-does-not-exist-27389479182374')
                .catch(function (err) {
                    expect(err).to.be.instanceof(Error);
                    expect(err.statuscode).to.eql(404);
                });
        });

        it('should return a proper object if a user exists', function () {
            return fetchKey('peeri')
                .then(function (res) {
                    expect(res).to.have.property('username');
                    expect(res).to.have.property('keys');
                });
        });
    });
});