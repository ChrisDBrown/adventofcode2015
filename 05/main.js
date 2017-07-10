const fs = require('fs');

function hasForbiddenStrings(string) {
  if (string.indexOf('ab') >= 0 || string.indexOf('cd') >= 0 || string.indexOf('pq') >= 0 || string.indexOf('xy') >= 0) {
    return true;
  }
  return false;
}

function vowelCount(string) {
  // turn string to array so we can use Array.prototype.filter()
  const vowels = string.split('')
    .filter(letter => ['a', 'e', 'i', 'o', 'u'].indexOf(letter) >= 0);

  return vowels.length;
}

// use regular expression to check for repeated letters
function hasDoubleLetter(string) {
  const doubleReg = /(.)\1/;
  return doubleReg.test(string);
}

// check if a string passes all the tests
function passesNiceTest(string) {
  return !hasForbiddenStrings(string) && vowelCount(string) >= 3 && hasDoubleLetter(string);
}

fs.readFile('05/input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const strings = data.toString().split('\n');

  const passes = strings.filter(string => passesNiceTest(string));

  process.stdout.write(`${passes.length}\n`);
});
