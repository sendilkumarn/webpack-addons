/* eslint-disable quotes */
const jscodeshift = require('jscodeshift');


function arrowFunction(value) {
	return "() => " +  "'" + value + "'";
}
function regularFunction(value, funcName) {
	return "function " + funcName + "() {\n return " + value + "\n}";
}
function dynamicPromise(arr) {
	if(Array.isArray(arr)) {
		return "() => new Promise((resolve) => resolve([" + arr.map( (n) => {
			return "'" + n + "'";
		}) + "]))";
	} else {
		return "() => new Promise((resolve) => resolve(" + "'" + arr + "'" + "))";
	}
}
function assetFilterFunction(value) {
	return "function assetFilter" + "(assetFilename) {\n return assetFilename.endsWith(" +  "'" + "." + value + "'" + ");\n}";
}
function externalRegExpFunction(regexp) {
	return "\n function externalRegExp(context, request, callback) {\n if ("
	+ "/" + regexp + "/.test(request)){" + "\n" + "   return callback(null, 'commonjs ' + request);\n}\n"
	+ "callback();\n}";
}
function parseValue(regexp) {
	return jscodeshift(regexp);
}

function commonChunksPluginCreate(value) {
	return "new webpack.optimize.CommonsChunkPlugin({name:" + "'" + value + "'" + ",filename:" + "'" + value + "-[hash].min.js'})";
}
function createPathProperty(one,two,three) {
	return one + '(' + two + ", '" + three + "')";
}

function createRequire(val) {
	return "const " + val + " = " + "require(" + "'" + val + "'" + ");";
}
function List(name, message, choices) {
  return ({
    type: 'list',
    name: name,
    message: message,
    choices: choices
  });
}
function RawList(name, message, choices) {
  return ({
    type: 'rawlist',
    name: name,
    message: message,
    choices: choices
  });
}

function CheckList(name, message, choices) {
  return ({
    type: 'checkbox',
    name: name,
    message: message,
    choices: choices
  });
}

function Input(name, message) {
  return ({
  type: 'input',
  name: name,
  message: message
});
}

module.exports = {
	arrowFunction,
	dynamicPromise,
	regularFunction,
	assetFilterFunction,
	externalRegExpFunction,
	parseValue,
	commonChunksPluginCreate,
	createPathProperty,
	createRequire,
	List,
	RawList,
	CheckList,
	Input
};