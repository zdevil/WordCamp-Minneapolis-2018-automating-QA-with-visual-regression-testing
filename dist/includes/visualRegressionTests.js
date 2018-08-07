'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    const args = (0, _minimist2.default)(process.argv.slice(2), {});
    const sitesToTestKeys = Object.keys(_sitesToTest2.default);
    if (sitesToTestKeys.length === 1) {
        (0, _visualRegressionTestSite2.default)(sitesToTestKeys[0]);
    } else if (Object.prototype.hasOwnProperty.call(args, 'site')) {
        (0, _visualRegressionTestSite2.default)(args.site);
    } else {

        const rl = _readline2.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log("\nAvailable sites:\n");
        let siteNumMap = [];

        for (const site in _sitesToTest2.default) {
            siteNumMap.push(site);
        }

        for (let [key, site] of siteNumMap.entries()) {
            console.log(`[${_ansiColors2.default.bold(key)}]: ${site}`);
        }

        rl.question(`\nEnter the ${_ansiColors2.default.bold('number')} of the site you want to test or enter ${_ansiColors2.default.bold('all')} to test all sites: `, userSite => {
            if ('all' === userSite) {
                (0, _testAllSites2.default)();
            } else if (siteNumMap.includes(userSite)) {
                (0, _visualRegressionTestSite2.default)(userSite);
            } else if (Array.from(siteNumMap.keys()).includes(parseInt(userSite))) {
                (0, _visualRegressionTestSite2.default)(siteNumMap[userSite]);
            } else {
                (0, _throwError2.default)(_ansiColors2.default.red(`${_ansiColors2.default.gray(userSite)} is not a valid site. Check the name you entered against the ${_ansiColors2.default.gray('includes/sitesToTest.js')} config file`));
            }
            rl.close();
        });
    }
};

var _throwError = require('./throwError');

var _throwError2 = _interopRequireDefault(_throwError);

var _sitesToTest = require('./sitesToTest');

var _sitesToTest2 = _interopRequireDefault(_sitesToTest);

var _testAllSites = require('./testAllSites');

var _testAllSites2 = _interopRequireDefault(_testAllSites);

var _visualRegressionTestSite = require('./visualRegressionTestSite');

var _visualRegressionTestSite2 = _interopRequireDefault(_visualRegressionTestSite);

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _ansiColors = require('ansi-colors');

var _ansiColors2 = _interopRequireDefault(_ansiColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=visualRegressionTests.js.map