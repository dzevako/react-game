// @flow
'use strict';

const {resolve} = require('path');

const environment = 'development'; // process.env.NODE_ENV;
const development = environment === 'development';
const staticPath = resolve(__dirname, '../src/main/resources/static');
const production = environment === 'production';
const src = resolve(__dirname, '../src/main/js');
const port = {
		dev:  9000, 
		prod: 8080
	}

module.exports = {
	development,
	staticPath,
	mode: environment,
	production,
	src,
	port
};
