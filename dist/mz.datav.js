(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mzDatav = factory());
})(this, (function () { 'use strict';

	console.log('hello mz datav!');

	var index = {};

	return index;

}));
