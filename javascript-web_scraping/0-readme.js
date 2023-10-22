#!/usr/bin/node
/* Script that reads and prints the content of a file */

const fs = require('fs');
const firstArg = process.argv[2];

fs.readFile(firstArg, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
