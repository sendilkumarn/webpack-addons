/* eslint-disable quotes */
const jscodeshift = require('jscodeshift');


function arrowFunction(value) {
	return jscodeshift("() => " +  "'" + value + "'");
}
function regularFunction(value, funcName) {
	return jscodeshift("function " + funcName + "() {\n return " + value + "\n}");
}
function dynamicPromise(arr) {
	if(Array.isArray(arr)) {
		return jscodeshift("() => new Promise((resolve) => resolve([" + arr.map( (n) => {
			return "'" + n + "'";
		}) + "]))");
	} else {
		return jscodeshift("() => new Promise((resolve) => resolve(" + "'" + arr + "'" + "))");
	}
}
function assetFilterFunction(value) {
	return jscodeshift("function assetFilter" + "(assetFilename) {\n return assetFilename.endsWith(" +  "'" + "." + value + "'" + ");\n}");
}
function externalRegExpFunction(regexp) {
	return jscodeshift("\n function externalRegExp(context, request, callback) {\n if ("
	+ "/" + regexp + "/.test(request)){" + "\n" + "   return callback(null, 'commonjs ' + request);\n}\n"
	+ "callback();\n}");
}
function parseValue(regexp) {
	return jscodeshift(regexp);
}

function commonChunksPluginCreate(value) {
	return jscodeshift("new webpack.optimize.CommonsChunkPlugin({name:" + "'" + value + "'" + ",filename:" + "'" + value + "-[hash].min.js'})");
}
function createPathProperty(one,two,three) {
	return jscodeshift(one + '(' + two + ", '" + three + "')");
}

function createRequire(val) {
	return jscodeshift("const " + val + " = " + "require(" + "'" + val + "'" + ");");
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
	createRequire
};