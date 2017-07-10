const crypto = require('crypto');

const seed = 'yzbqklnj';
let answer1 = false;
let answer2 = false;
let i = 0;

while (!answer1 || !answer2) {
  // generate the hash for the current value of i
  const hash = crypto
    .createHash('md5')
    .update(seed + i.toString())
    .digest('hex');

  // if it starts with '00000' that's our answer, otherwise loop
  if (!answer1 && hash.substring(0, 5) === '00000') {
    answer1 = i;
  }

  if (!answer2 && hash.substring(0, 6) === '000000') {
    answer2 = i;
  }

  i += 1;
}

process.stdout.write(`1: ${answer1}\n2: ${answer2}\n`);
