/* Using Process stdin */

process.stdin.setEncoding('utf8');
process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', function(name) {
  process.stdout.write(`Your name is: ${name}`);
  process.stdout.write("This important software is now closing");
  process.stdin.end(); // close the standard
});

process.stdin.on('end', function() {
  
});