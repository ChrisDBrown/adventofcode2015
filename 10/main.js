const input = '1321131112';

const tick = string =>
  string
    .match(/(.)\1*/g)
    .map(group => `${group.length}${group.slice(0, 1)}`)
    .join('');

let output = input;
let answerone = 0;
for (let i = 0; i < 50; i += 1) {
  if (i === 40) answerone = output.length;
  output = tick(output);
}

process.stdout.write(`Answer one: ${answerone}\n`);
process.stdout.write(`Answer two: ${output.length}\n`);
