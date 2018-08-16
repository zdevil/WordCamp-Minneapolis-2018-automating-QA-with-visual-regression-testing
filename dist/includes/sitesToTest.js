'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const sitesToTest = {
    'return-to-pantheon-test': {
        label: 'Return to Pantheon Test',
        BackstopReferenceBaseUrl: 'https://dev-return-to-pantheon-test.pantheonsite.io/',
        BackstopTestUrl: 'https://live-return-to-pantheon-test.pantheonsite.io/',
        pathsToTest: ["/2018/04/", "/2018/04/04/hello-world/"]
    },
    'andrew-woocommerce-playground': {
        label: 'Andrew WooCommerce Playground',
        BackstopReferenceBaseUrl: 'https://dev-andrew-woocommerce-playground.pantheonsite.io/',
        BackstopTestUrl: 'https://live-andrew-woocommerce-playground.pantheonsite.io/',
        pathsToTest: ["/2018/05/18/hello-world/", "/product-category/accessories/", "/product/beanie/"]
    },
    'wordpress-at-scale': {
        label: 'WordPress at Scale',
        BackstopReferenceBaseUrl: 'https://dev-wp-microsite.pantheonsite.io/',
        BackstopTestUrl: 'https://scalewp.io/',
        pathsToTest: ["/resources", "/elastic-architecture", "/page-caching", "/object-caching", "/query-performance", "/searching-for-scale", "/a-real-world-scalable-architecture", "/development-and-workflow"]
    }
};

exports.default = sitesToTest;
//# sourceMappingURL=sitesToTest.js.map