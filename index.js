const WebpackGenerator = require('./lib/yeoman/webpack-generator');
const initTransform = require('./lib/init/index');
const migrateTransform = require('./lib/migrate/migrate');

const createArrowFunction = require('./lib/inquirer/index').createArrowFunction;
const createDynamicPromise = require('./lib/inquirer/index').createDynamicPromise;
const createRegularFunction = require('./lib/inquirer/index').createRegularFunction;
const createAssetFilterFunction = require('./lib/inquirer/index').createAssetFilterFunction;
const createExternalFunction = require('./lib/inquirer/index').createExternalFunction;
const parseValue = require('./lib/inquirer/index').parseValue;
const createCommonsChunkPlugin = require('./lib/inquirer/index').createCommonsChunkPlugin;
const createRequire = require('./lib/inquirer/index').createRequire;
const List = require('./lib/inquirer/index').List;
const RawList = require('./lib/inquirer/index').RawList;
const CheckList = require('./lib/inquirer/index').CheckList;
const Input = require('./lib/inquirer/index').Input;
const InputValidate = require('./lib/inquirer/index').InputValidate;
const Confirm = require('./lib/inquirer/index').Confirm;

module.exports = {
	createArrowFunction,
	createDynamicPromise,
	createRegularFunction,
	createAssetFilterFunction,
	createExternalFunction,
	parseValue,
	createCommonsChunkPlugin,
	createRequire,
	List,
	RawList,
	CheckList,
	Input,
	InputValidate,
	Confirm,
	WebpackGenerator,
	initTransform,
	migrateTransform
};
