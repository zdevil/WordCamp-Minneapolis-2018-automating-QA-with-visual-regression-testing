'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    const siteCount = Object.keys(_sitesToTest2.default).length;
    let i = 1;
    for (var site in _sitesToTest2.default) {
        (0, _fancyLog2.default)(_ansiColors2.default.yellow(`Testing site ${i} of ${siteCount}...`));
        // https://nodejs.org/docs/latest/api/child_process.html#child_process_child_process_execsync_command_options
        execSync(`node dist/index.js --site=${site}`, { stdio: [0, 1, 2] });
        i++;
    }

    (0, _fancyLog2.default)(_ansiColors2.default.green(`Done testing ${siteCount} sites!`));
};

var _sitesToTest = require('./sitesToTest');

var _sitesToTest2 = _interopRequireDefault(_sitesToTest);

var _fancyLog = require('fancy-log');

var _fancyLog2 = _interopRequireDefault(_fancyLog);

var _ansiColors = require('ansi-colors');

var _ansiColors2 = _interopRequireDefault(_ansiColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// External dependencies
const { execSync } = require('child_process'); // Local dependencies
//# sourceMappingURL=testAllSites.js.map