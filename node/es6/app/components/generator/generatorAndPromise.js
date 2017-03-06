'use strict';

/**
 * Created by yaoyc on 2017/3/2.
 */
var fs = require('fs');

{

	var readFile = function readFile(fileName) {
		return new Promise(function (resolve, reject) {
			fs.readFile(fileName, function (error, data) {
				if (error) return reject(error);
				resolve(data);
			});
		});
	};

	var gen = regeneratorRuntime.mark(function gen() {
		var f1, f2;
		return regeneratorRuntime.wrap(function gen$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return readFile('/etc/fstab');

					case 2:
						f1 = _context.sent;
						_context.next = 5;
						return readFile('/etc/shells');

					case 5:
						f2 = _context.sent;

						console.log(f1.toString());
						console.log(f2.toString());

					case 8:
					case 'end':
						return _context.stop();
				}
			}
		}, gen, this);
	});
	var g = gen();

	g.next().value.then(function (data) {
		g.next(data).value.then(function (data) {
			g.next(data);
		});
	});
}