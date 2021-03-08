exports.config = {
    // Runner Configuration
    runner: 'local',
    specs: [
        './specs/OpenPage.spec.js'
    ],
    exclude: [],
    
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    
    logLevel: 'info',
    
    bail: 0,
    
    baseUrl: 'https://the-internet.herokuapp.com',
    
    waitforTimeout: 30000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    services: ['chromedriver'],
    
    framework: 'mocha',
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    }
}
