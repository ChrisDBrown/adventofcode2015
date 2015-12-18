(function () {
   'use strict';

	const fs = require('fs');

	fs.readFile('01/input.txt', 'utf8', function (err, data) {
		if (err !== null) {
			console.error('Unable to read file');
		} else {
			let floor = 0;
			for (let i = 0; i < data.length; i++) {
				if (data[i] == '(') {
					floor++;
				} else {
					floor--;
				}
			}
			console.log(floor);
		}
	});

}());