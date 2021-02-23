exports.config = {
    specs: [],
    host: 'localhost',
    port: 4444,
    path: '/',
    cababilities: [{
            browserName: 'chrome'
        }],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: '600000'
    },
    logLevel: 'trace'
};
