(function () {
   'use strict';

	const fs = require('fs');

	fs.readFile('01/input.txt', 'utf8', function (err, data) {
		if (err !== null) {
			console.error('Unable to read file');
		} else {
			let floor = 0;
			let basementIndex = -1;
			for (let i = 0; i < data.length; i++) {
				if (data[i] == '(') {
					floor++;
				} else {
					floor--;
				}
				if (floor == -1 && basementIndex == -1) {
					basementIndex = i;
				}
			}
			console.log("Part 1: " + floor);
			console.log("Part 2: " + basementIndex);
		}
	});

}());