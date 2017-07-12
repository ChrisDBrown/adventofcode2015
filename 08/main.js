const fs = require('fs');

fs.readFile('08/input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const answer = data
    .split('\n')
    .reduce((total, line) => total + (line.length - eval(line).length), 0);

  process.stdout.write(`${answer}\n`);
});
