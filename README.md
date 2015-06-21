# github-ssh-keys

fetch ssh keys from github for a given username

[![Build Status](https://travis-ci.org/peerigon/github-ssh-keys.svg)](https://travis-ci.org/peerigon/github-ssh-keys) [![Dependency Status](https://david-dm.org/peerigon/github-ssh-keys.svg)](https://david-dm.org/peerigon/github-ssh-keys)

## Usage (cli)

Use `github-ssh-keys` to fetch users ssh public keys from github.

```bash
$ github-ssh-keys flootr meaku
```

### --format

If you use the `--format` flag you are able to auto format keys to fit in a `authorized-keys` file.

```bash
$ github-ssh-keys --format flootr meaku jhnns >> authorized_keys
```

### --format



## Library (API)

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