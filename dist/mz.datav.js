(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('sam-test-data')) :
	typeof define === 'function' && define.amd ? define(['sam-test-data'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mzDatav = factory(global.samTestData));
})(this, (function (samTestData) { 'use strict';

	//common js写法


	console.log(samTestData.random(100), samTestData.a, samTestData.b );

	return samTestData.random;

}));
