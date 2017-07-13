const fs = require('fs');

const shuffleArray = (array) => {
  const shuffled = [];
  while (array.length) {
    const index = Math.floor(Math.random() * array.length);
    shuffled.push(array.splice(index, 1)[0]);
  }
  return shuffled;
};

fs.readFile('09/input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const routes = data
    .split('\n')
    .reduce((gridIn, line) => {
      // cheeky
      // eslint-disable-next-line no-unused-vars
      const [from, a, to, b, dist] = line.split(' ');

      const grid = Object.assign({}, gridIn);

      grid[from] = grid[from] || {};
      grid[to] = grid[to] || {};
      grid[from][to] = parseInt(dist, 0);
      grid[to][from] = parseInt(dist, 0);

      return grid;
    }, {});

  let places = Object.keys(routes);
  let shortestDistance = false;
  let longestDistance = false;

  // brute force is cool
  // and also quick
  // sorry
  for (let i = 0; i < 1000000; i += 1) {
    places = shuffleArray(places);

    let totalDistance = 0;
    for (let j = 0; j < (places.length - 1); j += 1) {
      totalDistance += routes[places[j]][places[j + 1]];
    }

    shortestDistance = Math.min(shortestDistance, totalDistance) || totalDistance;
    longestDistance = Math.max(longestDistance, totalDistance) || totalDistance;
  }

  process.stdout.write(`Shortest distance (part 1): ${shortestDistance}\n`);
  process.stdout.write(`Longest distance (part 2): ${longestDistance}\n`);
});
