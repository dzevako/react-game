// @flow
'use strict';

const {join} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// MiniCssExtractPlugin заменяет ExtractTextWebpackPlugin и выполняет ту же задачу (сборку css в один файл)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
	new MiniCssExtractPlugin({
		chunkFilename: '[id].css',
		filename: '[name].css'
	}),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: join(__dirname, '../src/main/resources/templates/index.html'),
		title: 'Scheduler'
	})
];

module.exports = plugins;
