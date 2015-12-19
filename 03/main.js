(function () {
   'use strict';

	const fs = require('fs');

	// this is very quick and dirty, but works for this limited case
	function existsInArrayOfArrays(multiDimensionalArray, toBeFound) {
		const matchingArrays = multiDimensionalArray.filter(function(singleArray) {
			return JSON.stringify(singleArray) == JSON.stringify(toBeFound);
		});

		if (matchingArrays.length > 0) {
			return true;
		} else {
			return false;
		}
	}

	fs.readFile('03/input.txt', 'utf8', function (err, data) {
		if (err) throw err;
		let visited = [[0, 0]];
		let coordinates = [0, 0];

		// get the grid coordinates of all houses visited
		for (let i = 0; i < data.length; i++) {
			switch (data[i]) {
				case '^':
					coordinates[1]++;
					break;
				case '>':
					coordinates[0]++;
					break;
				case '<':
					coordinates[0]--;
					break;
				case 'v':
					coordinates[1]--;
					break;
			}

			// if they've not already been visited add them into the list of visited houses
			if (!existsInArrayOfArrays(visited, coordinates)) {
				visited.push(coordinates.slice(0));
			}
		}

		console.log(visited.length);
	});

}());