exports.config = {
    // Runner Configuration
    runner: 'local',
    specs: [
        './specs/login.spec.js'
    ],
    
    host: 'http://192.168.2.106',
    
    port: 4444,
    
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
    
    waitforTimeout: 10000,
    
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
