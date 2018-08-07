'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const sitesToTest = {
    'andrew-woocommerce-playground': {
        label: 'Andrew WooCommerce Playground',
        BackstopReferenceBaseUrl: 'https://dev-andrew-woocommerce-playground.pantheonsite.io/',
        BackstopTestUrl: 'https://live-andrew-woocommerce-playground.pantheonsite.io/',
        pathsToTest: ["/cart/", "/2018/05/18/hello-world/", "/product-category/accessories/", "/product/vneck-tee/"]
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