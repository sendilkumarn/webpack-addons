'use strict';
const utils = require('../index');

describe('utils', () => {
	describe('arrowFunction', () => {
		it('should stringify an arrowFunction', () => {
			expect(utils.arrowFunction('app.js')).toMatchSnapshot();
		});
	});
	describe('regularFunction', () => {
		it('should stringify an arrowFunction', () => {
			expect(utils.regularFunction('app.js')).toMatchSnapshot();
		});
	});
	describe('dynamicPromise', () => {
		it('should stringify an single value', () => {
			expect(utils.dynamicPromise('app.js')).toMatchSnapshot();
		});
		it('should stringify an array', () => {
			expect(utils.dynamicPromise(['app.js', 'index.js'])).toMatchSnapshot();
		});
	});
	describe('assetFilterFunction', () => {
		it('should stringify an assetFilterFunction', () => {
			expect(utils.assetFilterFunction('js')).toMatchSnapshot();
		});
	});
	describe('externalRegExpFunction', () => {
		it('should stringify an externalRegExpFunction', () => {
			expect(utils.externalRegExpFunction('js')).toMatchSnapshot();
		});
	});
	describe('commonChunksPluginCreate', () => {
		it('should stringify an commonChunksPlugin', () => {
			expect(utils.commonChunksPluginCreate('vendor')).toMatchSnapshot();
		});
	});
	describe('createRequire', () => {
		it('should stringify an require statement', () => {
			expect(utils.createRequire('webpack')).toMatchSnapshot();
		});
	});
	describe('Inquirer', () => {
		it('should make an List object', () => {
			expect(utils.List('entry', 'does it work?', ['Yes', 'Maybe'])).toEqual({
				type: 'list',
				name: 'entry',
				message: 'does it work?',
				choices: ['Yes', 'Maybe']
			});
		});
		it('should make an RawList object', () => {
			expect(utils.RawList('output', 'does it work?', ['Yes', 'Maybe'])).toEqual({
				type: 'rawlist',
				name: 'output',
				message: 'does it work?',
				choices: ['Yes', 'Maybe']
			});
		});
		it('should make an CheckList object', () => {
			expect(utils.CheckList('context', 'does it work?', ['Yes', 'Maybe'])).toEqual({
				type: 'checkbox',
				name: 'context',
				message: 'does it work?',
				choices: ['Yes', 'Maybe']
			});
		});
		it('should make an Input object', () => {
			expect(utils.Input('plugins', 'what is your plugin?')).toEqual({
				type: 'input',
				name: 'plugins',
				message: 'what is your plugin?'
			});
		});
	});
});
