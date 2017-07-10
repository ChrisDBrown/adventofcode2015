const fs = require('fs');

// this is very quick and dirty, but works for this limited case
function existsInArrayOfArrays(multiDimensionalArray, toBeFound) {
  return multiDimensionalArray
    .filter(singleArray => JSON.stringify(singleArray) === JSON.stringify(toBeFound))
    .length > 0;
}

fs.readFile('03/input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const visited = [[0, 0]];
  const coordinates = [0, 0];

  // get the grid coordinates of all houses visited
  for (let i = 0; i < data.length; i += 1) {
    switch (data[i]) {
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

  process.stdout.write(`${visited.length}\n`);
});
