export default function backstopConfig(BackstopReferenceBaseUrl, BackstopTestUrl, pathsToTest, siteName) {

    const backstopDataDir = `backstop_data/${siteName}`;
    const delayTime = 1500;
    const acceptableThreshold = 2.0;

    const config = {
        'id': siteName,
        asyncCaptureLimit: 10,
        'viewports': [{
                'name': 'phone',
                'width': 320,
                'height': 480
            },
            {
                'name': 'desktop',
                'width': 1920,
                'height': 1080
            }
        ],
        'scenarios': [{
            'label': 'Homepage',
            'url': BackstopTestUrl,
            'referenceUrl': BackstopReferenceBaseUrl,
            'hideSelectors': [],
            'selectors': ['document'],
            'readyEvent': null,
            'delay': delayTime,
            'misMatchThreshold': acceptableThreshold
        }],
        'paths': {
            'ci_report': `${backstopDataDir}/ci_report`,
            'html_report': `${backstopDataDir}/html_report`,
            'bitmaps_reference': `${backstopDataDir}/bitmaps_reference`,
            'bitmaps_test': `${backstopDataDir}/bitmaps_test`,
            'compare_data': `${backstopDataDir}/bitmaps_test/compare.json`,
            'casper_scripts': `${backstopDataDir}/casper_scripts`,
            'engine_scripts': `${backstopDataDir}/engine_scripts`
        },
        'engine': 'puppeteer',
        'report': ['browser', 'CI'],
        'casperFlags': [],
        'debug': false,
        'port': 3001
    };


    const scenarios = pathsToTest.map(function (path) {

        return {
            'label': path,
            'url': BackstopTestUrl + path,
            'referenceUrl': BackstopReferenceBaseUrl + path,
            'hideSelectors': [],
            'selectors': ['document'],
            'readyEvent': null,
            'delay': delayTime,
            'misMatchThreshold': acceptableThreshold
        };

    });

    config.scenarios = config.scenarios.concat(scenarios);

    return config;

}
