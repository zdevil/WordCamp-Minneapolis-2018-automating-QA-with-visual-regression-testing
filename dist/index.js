'use strict';

var _visualRegressionTests = require('./includes/visualRegressionTests');

var _visualRegressionTests2 = _interopRequireDefault(_visualRegressionTests);

var _testAllSites = require('./includes/testAllSites');

var _testAllSites2 = _interopRequireDefault(_testAllSites);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const args = (0, _minimist2.default)(process.argv.slice(2), {});

// https://nodejs.org/api/process.html#process_process_platform
// const isWindows = process.platform === "win32";

// External dependencies
// Local dependencies
if (Object.prototype.hasOwnProperty.call(args, 'all')) {
    (0, _testAllSites2.default)();
} else {
    (0, _visualRegressionTests2.default)();
}
//# sourceMappingURL=index.js.map