/**
 * Created by yaoyc on 2017/2/14.
 */
(function () {
	"use strict";
	/**
	 * 定义一个extend的方法
	 * @param o
	 * @param p
	 */
	function extend(o, p) {
		for (var prop in p) {
			o[prop] = p[prop];
		}
	}
	
	/**
	 *
	 * @constructor
	 */
	function Set() {          // This is the constructor
		this.values = {};     // The properties of this object hold the set
		this.n = 0;           // How many values are in the set
		this.add.apply(this, arguments);  // All arguments are values to add
	}
	
	/**
	 *
	 * @returns {Set}
	 */
	Set.prototype.add = function () {
		for (var i = 0; i < arguments.length; i++) {  // For each argument
			var val = arguments[i];                  // The value to add to the set
			var str = Set._v2s(val);                 // Transform it to a string
			if (!this.values.hasOwnProperty(str)) {  // If not already in the set
				this.values[str] = val;              // Map string to value
				this.n++;                            // Increase set size
			}
		}
		return this;                                 // Support chained method calls
	};

// Remove each of the arguments from the set.
	Set.prototype.remove = function () {
		for (var i = 0; i < arguments.length; i++) {  // For each argument
			var str = Set._v2s(arguments[i]);        // Map to a string
			if (this.values.hasOwnProperty(str)) {   // If it is in the set
				delete this.values[str];             // Delete it
				this.n--;                            // Decrease set size
			}
		}
		return this;                                 // For method chaining
	};

// Return true if the set contains value; false otherwise.
	Set.prototype.contains = function (value) {
		return this.values.hasOwnProperty(Set._v2s(value));
	};

// Return the size of the set.
	Set.prototype.size = function () {
		return this.n;
	};

// Call function f on the specified context for each element of the set.
	Set.prototype.foreach = function (f, context) {
		for (var s in this.values) {
			if (this.values.hasOwnProperty(s)) {
				f.call(context, this.values[s]);  // Call f on the value
			}
		}
	};

// This internal function maps any JavaScript value to a unique string.
	Set._v2s = function (val) {
		function objectId(o) {
			var prop = "|**objectid**|";   // Private property name for storing ids
			if (!o.hasOwnProperty(prop))   // If the object has no id
				o[prop] = Set._v2s.next++; // Assign it the next available
			return o[prop];                // Return the id
		}
		
		switch (val) {
			case undefined:
				return 'u';          // Special primitive
			case null:
				return 'n';          // values get single-letter
			case true:
				return 't';          // codes.
			case false:
				return 'f';
			default:
				switch (typeof val) {
					case 'number':
						return '#' + val;    // Numbers get # prefix.
					case 'string':
						return '"' + val;    // Strings get " prefix.
					default:
						return '@' + objectId(val); // Objs and funcs get @
				}
		}
	};
	Set._v2s.next = 100;
	/**
	 * 定义一个初始化的方法
	 * @param p
	 * @returns {*}
	 */
	function inherit(p) {
		if (p === null) {
			throw TypeError();
		} // p must be a non-null object
		if (Object.create) {
			// If Object.create() is defined...
			return Object.create(p);      //    then just use it.
		}
		var t = typeof p;                 // Otherwise do some more type checking
		if (t !== "object" && t !== "function") {
			throw TypeError();
		}
		// Define a dummy constructor function.
		function f() {
			
		}
		
		// 将原型对象指向p.
		f.prototype = p;
		// Use f() to create an "heir" of p.
		return new f();
	}
	
	/**
	 * 定义一个创建子类广场方法
	 * @param {object} superclass 父类
	 * @param {object} constructor 构造器
	 * @param methods  方法
	 * @param statics
	 * @returns {object|*}
	 */
	function defineSubclass(superclass,  // Constructor of the superclass
	                        constructor, // The constructor for the new subclass
	                        methods,     // Instance methods: copied to prototype
	                        statics)     // Class properties: copied to constructor
	{
		// Set up the prototype object of the subclass
		constructor.prototype = inherit(superclass.prototype);
		constructor.prototype.constructor = constructor;
		// Copy the methods and statics as we would for a regular class
		if (methods) {
			extend(constructor.prototype, methods);
		}
		if (statics) {
			extend(constructor, statics);
		}
		// Return the class
		return constructor;
	}
	
// We can also do this as a method of the superclass constructor
	Function.prototype.extend = function (constructor, methods, statics) {
		return defineSubclass(this, constructor, methods, statics);
	};


// The constructor function
	function SingletonSet(member) {
		this.member = member;   // Remember the single member of the set
	}

// Create a prototype object that inherits from the prototype of Set.
	SingletonSet.prototype = inherit(Set.prototype);

// Now add properties to the prototype.
// These properties override the properties of the same name from Set.prototype.
	extend(SingletonSet.prototype, {
		// Set the constructor property appropriately
		constructor: SingletonSet,
		// This set is read-only: add() and remove() throw errors
		add: function () {
			console.log('!!!!');
		},
		remove: function () {
			throw "read-only set";
		},
		// A SingletonSet always has size 1
		size: function () {
			return 1;
		},
		// Just invoke the function once, passing the single member.
		foreach: function (f, context) {
			f.call(context, this.member);
		},
		// The contains() method is simple: true only for one value
		contains: function (x) {
			return x === this.member;
		}
	});
	function SingletonSet2(name) {
		this.name = name;   // Remember the single member of the set
	}
	SingletonSet2.prototype = inherit(Set.prototype);
	SingletonSet.extend(SingletonSet2,{'speak':function(){ console.log(this.age);}},{"age":14});
	var singletonSet = new SingletonSet2('yao');
	singletonSet.speak();
})();