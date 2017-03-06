'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _marked = [dataConsumer].map(regeneratorRuntime.mark);

/**
 * Created by yaoyc on 2017/3/2.
 */
var fs = require('fs');
function dataConsumer() {
	return regeneratorRuntime.wrap(function dataConsumer$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					console.log('Started');
					_context.t0 = console;
					_context.next = 4;
					return;

				case 4:
					_context.t1 = _context.sent;
					_context.t2 = '1. ' + _context.t1;

					_context.t0.log.call(_context.t0, _context.t2);

					_context.t3 = console;
					_context.next = 10;
					return;

				case 10:
					_context.t4 = _context.sent;
					_context.t5 = '2. ' + _context.t4;

					_context.t3.log.call(_context.t3, _context.t5);

					return _context.abrupt('return', 'result');

				case 14:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

var genObj = dataConsumer();
console.log(genObj.next());

// Started
console.log(genObj.next('a'));

// 1. a
console.log(genObj.next('b'));

// 2. b
{
	/**
  * 对象jane原生不具备Iterator接口，无法用for...of遍历。这时，我们通过Generator函数objectEntries为它加上遍历器接口，
  * 就可以用for...of遍历了。加上遍历器接口的另一种写法是，将Generator函数加到对象的Symbol.iterator属性上面。
  * @param obj
  */
	var objectEntries = regeneratorRuntime.mark(function objectEntries(obj) {
		var propKeys, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, propKey;

		return regeneratorRuntime.wrap(function objectEntries$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						propKeys = Reflect.ownKeys(obj);
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						_context2.prev = 4;
						_iterator = propKeys[Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							_context2.next = 13;
							break;
						}

						propKey = _step.value;
						_context2.next = 10;
						return [propKey, obj[propKey]];

					case 10:
						_iteratorNormalCompletion = true;
						_context2.next = 6;
						break;

					case 13:
						_context2.next = 19;
						break;

					case 15:
						_context2.prev = 15;
						_context2.t0 = _context2['catch'](4);
						_didIteratorError = true;
						_iteratorError = _context2.t0;

					case 19:
						_context2.prev = 19;
						_context2.prev = 20;

						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}

					case 22:
						_context2.prev = 22;

						if (!_didIteratorError) {
							_context2.next = 25;
							break;
						}

						throw _iteratorError;

					case 25:
						return _context2.finish(22);

					case 26:
						return _context2.finish(19);

					case 27:
					case 'end':
						return _context2.stop();
				}
			}
		}, objectEntries, this, [[4, 15, 19, 27], [20,, 22, 26]]);
	});


	var jane = { first: 'Jane', last: 'Doe' };

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = objectEntries(jane)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _step2$value = _slicedToArray(_step2.value, 2),
			    key = _step2$value[0],
			    value = _step2$value[1];

			console.log(key + ': ' + value);
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
}
{
	/**
  * 嵌套使用的原理
  * yield*后面的Generator函数（没有return语句时），等同于在Generator函数内部，部署一个for...of循环。
  */
	var inner = regeneratorRuntime.mark(function inner() {
		return regeneratorRuntime.wrap(function inner$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.next = 2;
						return 'hello!';

					case 2:
					case 'end':
						return _context3.stop();
				}
			}
		}, inner, this);
	});
	var outer1 = regeneratorRuntime.mark(function outer1() {
		return regeneratorRuntime.wrap(function outer1$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.next = 2;
						return 'open';

					case 2:
						_context4.next = 4;
						return inner();

					case 4:
						_context4.next = 6;
						return 'close';

					case 6:
					case 'end':
						return _context4.stop();
				}
			}
		}, outer1, this);
	});
	// "close"

	var outer2 = regeneratorRuntime.mark(function outer2() {
		return regeneratorRuntime.wrap(function outer2$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						_context5.next = 2;
						return 'open';

					case 2:
						return _context5.delegateYield(inner(), 't0', 3);

					case 3:
						_context5.next = 5;
						return 'close';

					case 5:
					case 'end':
						return _context5.stop();
				}
			}
		}, outer2, this);
	});


	var gen = outer1();
	gen.next().value; // "open"
	gen.next().value; // 返回一个遍历器对象
	gen.next().value;

	var gen = outer2();
	gen.next().value; // "open"
	gen.next().value; // "hello!"
	gen.next().value; // "close"
}

// {
// 	let jobs = [job1, job2, job3];
//
// 	function *iterateJobs(jobs){
// 		for (var i=0; i< jobs.length; i++){
// 			var job = jobs[i];
// 			yield *iterateSteps(job.steps);
// 		}
// 	}
// }

{
	/**
  * 利用Generator函数，可以在任意对象上部署Iterator接口。
  * @param obj
  */
	var iterEntries = regeneratorRuntime.mark(function iterEntries(obj) {
		var keys, i, key;
		return regeneratorRuntime.wrap(function iterEntries$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						keys = Object.keys(obj);
						i = 0;

					case 2:
						if (!(i < keys.length)) {
							_context6.next = 9;
							break;
						}

						key = keys[i];
						_context6.next = 6;
						return [key, obj[key]];

					case 6:
						i++;
						_context6.next = 2;
						break;

					case 9:
					case 'end':
						return _context6.stop();
				}
			}
		}, iterEntries, this);
	});


	var myObj = { foo: 3, bar: 7 };

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = iterEntries(myObj)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var _step3$value = _slicedToArray(_step3.value, 2),
			    key = _step3$value[0],
			    value = _step3$value[1];

			console.log(key, value);
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}
}
{
	var doStuff = regeneratorRuntime.mark(function doStuff() {
		return regeneratorRuntime.wrap(function doStuff$(_context7) {
			while (1) {
				switch (_context7.prev = _context7.next) {
					case 0:
						_context7.next = 2;
						return fs.readFile.bind(null, 'hello.txt');

					case 2:
						_context7.next = 4;
						return fs.readFile.bind(null, 'world.txt');

					case 4:
						_context7.next = 6;
						return fs.readFile.bind(null, 'and-such.txt');

					case 6:
					case 'end':
						return _context7.stop();
				}
			}
		}, doStuff, this);
	});
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = doStuff()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var task = _step4.value;

			// task是一个函数，可以像回调函数那样使用它
			console.log(task());
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}
}