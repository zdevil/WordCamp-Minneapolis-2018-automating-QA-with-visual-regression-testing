// Local dependencies
import visualRegressionTests from './includes/visualRegressionTests';
import testAllSites from './includes/testAllSites';

// External dependencies
import minimist from 'minimist';

const args = minimist(process.argv.slice(2), {});

// https://nodejs.org/api/process.html#process_process_platform
// const isWindows = process.platform === "win32";

if (Object.prototype.hasOwnProperty.call(args, 'all')) {
    testAllSites();
} else {
    visualRegressionTests();
}

