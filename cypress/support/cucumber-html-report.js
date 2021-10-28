var reporter = require('cucumber-html-reporter');
var options = {
        theme: 'bootstrap',
        jsonFile: 'cypress/cucumber-json',
        output: './reports/cucumber-htmlreport.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version": "0.3.2",
            "Test Environment": "Staging",
            "Browser": "Chrome 54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Execute": "Remote"
        }
    };
    
reporter.generate(options);