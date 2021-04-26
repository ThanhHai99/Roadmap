exports.config = {
    runner: 'local',
    specs: [
        './test/specs/search.*',
        // './test/specs/login.*',
        // './test/specs/buy.*',
        // './test/specs/change.*',
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://shopee.vn',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
