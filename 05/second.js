const fs = require('fs');

function passesNiceTest(string) {
  const rule1 = string.match(/([a-z][a-z])[a-z]*\1/);
  const rule2 = string.match(/([a-z])[a-z]\1/);

  return (rule1 && rule1.length > 0) && (rule2 && rule2.length > 0);
}

fs.readFile('05/input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const strings = data.toString().split('\n');

  const passes = strings.filter(string => passesNiceTest(string));

  process.stdout.write(`${passes.length}\n`);
});
