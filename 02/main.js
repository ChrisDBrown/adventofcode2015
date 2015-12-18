(function () {
   'use strict';

	const fs = require('fs');

	fs.readFile('02/input.txt', 'utf8', function (err, data) {
		if (err) throw err;
		let parcels = data.toString().split("\n");
		let total = 0;

		// transform into array of the 3 different side sizes, sorted low -> high
		parcels = parcels.map(function(parcel) {
			let sides = parcel.split('x');
			return [sides[0] * sides[1], sides[1] * sides[2], sides[0] * sides[2]].sort(function(a, b) {
				return a - b;
			});
		});

		for (let i = 0; i < parcels.length; i++) {
			// the total surface area of the parcel, plus the smallest side
			total += ((2*parcels[i][0]) + (2*parcels[i][1]) + (2*parcels[i][2]) + parcels[i][0]);
		}

		console.log(total);
	});

}());