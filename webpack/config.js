'use strict';

const path = require('path');
const express = require('express');
const localIp = require('my-local-ip');

const define = require('./define');
const loaders = require('./loaders');
const optimization = require('./optimization');
const plugins = require('./plugins');
const resolve = require('./resolve');

console.log('Reading webpack config...');

console.log('entry.index = ' + path.join(define.src, 'app.js'));
console.log('output.path = ' + path.resolve(__dirname, "../src/main/resources/static/built"));

module.exports = {

	target: "web",

    entry: {
    	index: path.join(define.src, 'app.js')
    },
    
    output: {
		path: define.buildPath,
		//path: path.resolve(__dirname, "../src/main/resources/static"),
		filename: 'index.js',
		//publicPath : path.resolve(__dirname, "../target/classes/static")
	},
    
    devtool: define.development ? 'inline-source-map' : false,
    
	cache: true,
    
    mode: define.mode,
    
	module: loaders,
	
	optimization,
	
	plugins,
	
	resolve,
	
	devServer: {
        host: localIp(),
        port: define.port.dev,
        contentBase: define.staticPath
    },
};
