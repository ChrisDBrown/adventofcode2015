const fs = require('fs');
const parseInstruction = require('./parse');

function doInstruction(instruction, lights) {
  const returnLights = lights;
  for (let x = instruction.x1; x <= instruction.x2; x += 1) {
    for (let y = instruction.y1; y <= instruction.y2; y += 1) {
      const reference = `${x}-${y}`;

      switch (instruction.type) {
        case 'turn on':
          returnLights[reference] = true;
          break;

        case 'turn off':
          returnLights[reference] = false;
          break;

        case 'toggle':
        default:
          returnLights[reference] = !lights[reference];
          break;
      }
    }
  }

  return returnLights;
}

fs.readFile('06/input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const instructions = data.split('\n');

  const lights = instructions
    .reduce((current, instruction) => doInstruction(
      parseInstruction(instruction),
      current,
    ), {});

  const count = Object.values(lights)
    .filter(light => light).length;

  process.stdout.write(`${count}\n`);
});
