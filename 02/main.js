const fs = require('fs');

function sortNumbers(a, b) {
  return a - b;
}

fs.readFile('02/input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  let parcels = data.toString().split('\n');
  let totalPaper = 0;
  let totalRibbon = 0;

  // transform into array of the 3 different side sizes, sorted low -> high
  parcels = parcels.map((parcel) => {
    const sides = parcel.split('x').sort(sortNumbers);
    const dimensions = [
      sides[0] * sides[1],
      sides[1] * sides[2],
      sides[0] * sides[2],
    ].sort(sortNumbers);
    return dimensions.concat(sides);
  });

  for (let i = 0; i < parcels.length; i += 1) {
    // the total surface area of the parcel, plus the smallest side
    const paperArea = (
      (2 * parcels[i][0]) +
      (2 * parcels[i][1]) +
      (2 * parcels[i][2]) +
      parcels[i][0]
    );
    totalPaper += parseInt(paperArea, 10);

    const ribbonLength = ((2 * parcels[i][3]) + (2 * parcels[i][4])) +
      (parcels[i][3] * parcels[i][4] * parcels[i][5]);
    totalRibbon += parseInt(ribbonLength, 10);
  }

  process.stdout.write(`Part 1: ${totalPaper}\n`);
  process.stdout.write(`Part 2: ${totalRibbon}\n`);
});
