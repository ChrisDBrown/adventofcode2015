const fs = require('fs');

fs.readFile('01/input.txt', 'utf8', (err, data) => {
  if (err !== null) {
    process.stdout.write('Unable to read file\n');
  } else {
    let floor = 0;
    let basementIndex = -1;

    for (let i = 0; i < data.length; i += 1) {
      if (data[i] === '(') {
        floor += 1;
      } else {
        floor -= 1;
      }

      if (floor === -1 && basementIndex === -1) {
        basementIndex = i;
      }
    }

    process.stdout.write(`Part 1: ${floor}\n`);
    process.stdout.write(`Part 2: ${basementIndex + 1}\n`);
  }
});
