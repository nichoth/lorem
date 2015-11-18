#!/usr/bin/env node

var fs = require('fs');

fs.createReadStream(__dirname + '/lib/lorem.txt')
  .pipe(process.stdout)
;
