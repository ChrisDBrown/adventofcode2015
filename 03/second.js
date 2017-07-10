const fs = require('fs');

// this is very quick and dirty, but works for this limited case
function existsInArrayOfArrays(multiDimensionalArray, toBeFound) {
  return multiDimensionalArray
    .filter(singleArray => JSON.stringify(singleArray) === JSON.stringify(toBeFound))
    .length > 0;
}

function getVisitedForInstructions(instructions, visited = [[0, 0]]) {
  const coordinates = [0, 0];

  // get the grid coordinates of all houses visited
  for (let i = 0; i < instructions.length; i += 1) {
    switch (instructions[i]) {
      case '^':
        coordinates[1] += 1;
        break;
      case '>':
        coordinates[0] += 1;
        break;
      case '<':
        coordinates[0] -= 1;
        break;
      case 'v':
      default:
        coordinates[1] -= 1;
        break;
    }

    // if they've not already been visited add them into the list of visited houses
    if (!existsInArrayOfArrays(visited, coordinates)) {
      visited.push(coordinates.slice(0));
    }
  }

  return visited;
}

fs.readFile('03/input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const santa = data.split('').filter((el, i) => i % 2 === 1);
  const robo = data.split('').filter((el, i) => i % 2 === 0);

  const visitedSanta = getVisitedForInstructions(santa);
  const visitedAll = getVisitedForInstructions(robo, visitedSanta);

  process.stdout.write(`${visitedAll.length}\n`);
});
