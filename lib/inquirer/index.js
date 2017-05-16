const jscodeshift = require('jscodeshift');

module.exports = {

createArrowFunction : function(value) {
	return '() => ' +  '\'' + value + '\'';
},
createRegularFunction: function(value) {
	return 'function () {\n return ' + '\'' + value + '\'' + '\n}';
},
createDynamicPromise: function(arr) {
	if(Array.isArray(arr)) {
		return '() => new Promise((resolve) => resolve([' + arr.map( (n) => {
			return '\'' + n + '\'';
		}) + ']))';
	} else {
		return '() => new Promise((resolve) => resolve(' + '\'' + arr + '\'' + '))';
	}
},
createAssetFilterFunction: function(value) {
	return 'function (assetFilename) {\n return assetFilename.endsWith(' +  '\'' + '.' + value + '\'' + ');\n}';
},
createExternalFunction: function(regexp) {
	return '\n function (context, request, callback) {\n if ('
	+ '/' + regexp + '/.test(request)){' + '\n' + '   return callback(null, \'commonjs\' + request);\n}\n'
	+ 'callback();\n}';
},
parseValue: function(regexp) {
	return jscodeshift(regexp);
},

createCommonsChunkPlugin: function(value) {
	return 'new webpack.optimize.CommonsChunkPlugin({name:' + '\'' + value + '\'' + ',filename:' + '\'' + value + '\-[hash].min.js\'})';
},
createRequire: function(val) {
	return 'const ' + val + ' = ' + 'require(' + '\'' + val + '\'' + ');';
},
List: function(name, message, choices) {
	return ({
		type: 'list',
		name: name,
		message: message,
		choices: choices
	});
},
RawList: function(name, message, choices) {
	return ({
		type: 'rawlist',
		name: name,
		message: message,
		choices: choices
	});
},

CheckList: function(name, message, choices) {
	return ({
		type: 'checkbox',
		name: name,
		message: message,
		choices: choices
	});
},

Input: function(name, message) {
	return ({
		type: 'input',
		name: name,
		message: message
	});
},

InputValidate: function(name, message, cb) {
	return ({
		type: 'input',
		name: name,
		message: message,
		validate: cb
	});
},

Confirm: function(name, message) {
	return ({
		type: 'confirm',
		name: name,
		message: message,
	});
}
}
