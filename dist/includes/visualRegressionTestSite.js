'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (siteToTest) {
    const siteExists = Object.prototype.hasOwnProperty.call(_sitesToTest2.default, siteToTest);
    let rootDir = _path2.default.dirname(require.main.filename);
    if (rootDir.endsWith('dist')) {
        rootDir = rootDir.substring(0, rootDir.indexOf('/dist'));
    }

    if (!siteExists) {
        (0, _throwError2.default)(_ansiColors2.default.red(`${_ansiColors2.default.gray(siteToTest)} is not a valid site. Check the name you entered against the ${_ansiColors2.default.gray('includes/sitesToTest.js')} config file`));
    }

    _sitesToTest2.default[siteToTest].name = siteToTest;
    const site = _sitesToTest2.default[siteToTest];

    (0, _fancyLog2.default)(_ansiColors2.default.yellow(`Testing: ${site.label}`));

    (0, _fancyLog2.default)(`Generating configuration for ${site.label}`);
    const currentConfig = (0, _backstopConfig2.default)(site.BackstopReferenceBaseUrl, site.BackstopTestUrl, site.pathsToTest, site.name);

    (0, _fancyLog2.default)(`Running Backstop tests for ${site.label}`);
    (0, _backstopjs2.default)('reference', {
        config: currentConfig
    }).then(() => {
        (0, _fancyLog2.default)(`Backstop JS reference complete for ${site.label}! Starting tests.`);
        (0, _backstopjs2.default)('test', {
            config: currentConfig
        }).then(() => {

            (0, _fancyLog2.default)(_ansiColors2.default.yellow(`Report saved to ${_ansiColors2.default.gray(`${rootDir}/backstop_data/${site.name}/html_report/index.html`)}`));
            (0, _fancyLog2.default)(_ansiColors2.default.green(`Backstop JS tests passed for ${site.label}!`));
        }).catch(() => {

            (0, _fancyLog2.default)(`Report saved to "${rootDir}/backstop_data/${site.name}/html_report/index.html"`);
            (0, _throwError2.default)(_ansiColors2.default.red(`Backstop JS tests failed for ${_ansiColors2.default.gray(site.label)}!`));
        });
    }).catch(() => {
        (0, _throwError2.default)(_ansiColors2.default.red(`Backstop JS reference failed for ${_ansiColors2.default.gray(site.label)}! Please check the BackstopReferenceBaseUrl`));
    });
};

var _throwError = require('./throwError');

var _throwError2 = _interopRequireDefault(_throwError);

var _backstopConfig = require('./backstopConfig');

var _backstopConfig2 = _interopRequireDefault(_backstopConfig);

var _sitesToTest = require('./sitesToTest');

var _sitesToTest2 = _interopRequireDefault(_sitesToTest);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _backstopjs = require('backstopjs');

var _backstopjs2 = _interopRequireDefault(_backstopjs);

var _fancyLog = require('fancy-log');

var _fancyLog2 = _interopRequireDefault(_fancyLog);

var _ansiColors = require('ansi-colors');

var _ansiColors2 = _interopRequireDefault(_ansiColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=visualRegressionTestSite.js.map