const crypto = require('crypto');

const seed = 'yzbqklnj';
let answer = false;
let i = 0;

while (!answer) {
  // generate the hash for the current value of i
  const hash = crypto
    .createHash('md5')
    .update(seed + i.toString())
    .digest('hex');

  // if it starts with '00000' that's our answer, otherwise loop
  if (hash.substring(0, 5) === '00000') {
    answer = hash;
  } else {
    i += 1;
  }
}

process.stdout.write(`${i}\n`);
