/* Using Process stdin */

process.stdin.setEncoding('utf8');
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (name) => {
  process.stdout.write(`Your name is: ${name}`); // Write name in the console
  console.log('This important software is now closing');
  process.stdin.end(); // close the standard
});

process.stdin.on('end', () => {
});
