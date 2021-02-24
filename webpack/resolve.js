// @flow
'use strict';

const define = require('./define');
const {resolve} = require('path');

module.exports = {
	alias: {
		'actions': resolve(define.src, 'actions'),
		'component': resolve(define.src, 'component'),
		'constants': resolve(define.src, 'constants'),
		'helpers': resolve(define.src, 'helpers'),
		'images': resolve(define.src, 'images'),
		'init': resolve(define.src, 'init'),
		'reducers': resolve(define.src, 'reducers'),
		'store': resolve(define.src, 'store'),
		'styles': resolve(define.src, 'styles'),
		'types': resolve(define.src, 'types')
	},
	extensions: ['.js', '.jsx']
};
