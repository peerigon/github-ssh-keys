# github-ssh-keys

fetch ssh keys from github for a given username

[![Build Status](https://travis-ci.org/peerigon/github-ssh-keys.svg)](https://travis-ci.org/peerigon/github-ssh-keys) [![Dependency Status](https://david-dm.org/peerigon/github-ssh-keys.svg)](https://david-dm.org/peerigon/github-ssh-keys)

## Important Notice

As we use [ES6 template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings) make sure to use **io.js** when using this module!

## Usage

```javascript
var fetchKeys = require('git-fetch-ssh');
var username = 'flootr';

fetchKeys(username)
    .then(console.log)
    .catch(console.error);
```

Or, if you want to fetch the keys for more than one user.

```javascript
var users = ['jhnns', 'meaku', 'topa', 'matthaias', 'sbat', 'flootr'];

Promise.all(users.map(fetchKeys))
    .then(console.log)
    .catch(console.error);
```