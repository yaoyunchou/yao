'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by yaoyc on 2017/2/22.
 */
(function () {
	"use strict";

	{
		var f = function f(x, y) {
			return { x: x, y: y };
		};

		// 等同于

		var f2 = function f2(x, y) {
			return { x: x, y: y };
		};

		//f2(1, 2) // Object {x: 1, y: 2}
		console.log(f(1, 2));
		console.log(f2(1, 2));
	}
	{
		var _console;

		var ms = {};

		var getItem = function getItem(key) {
			return key in ms ? ms[key] : null;
		};

		var setItem = function setItem(key, value) {
			ms[key] = value;
		};

		var clear = function clear() {
			ms = {};
		};

		module.exports = { getItem: getItem, setItem: setItem, clear: clear };
		// 等同于
		module.exports = {
			getItem: getItem,
			setItem: setItem,
			clear: clear
		};

		var obj = {
			class: function _class() {}
		};

		// 等同于

		var obj2 = {
			'class': function _class() {}
		};

		var obj3 = {
			m: regeneratorRuntime.mark(function m() {
				return regeneratorRuntime.wrap(function m$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return 'hello world';

							case 2:
								_context.next = 4;
								return 'hello yaoyunchou';

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, m, this);
			})
		};
		(_console = console).log.apply(_console, _toConsumableArray(obj3.m()));
	}
})();