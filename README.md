# amazon-automation
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/luckhiem/aspire-automation-framework/blob/master/LICENSE)
## Introduction
This repository is used for executing automation test by using WebdriverIO, it's next-gen browser and mobile automation test framework for Node.j, WebDriverIO also is a custom implementation of Selenium's WebDriver API, provides and easy to manage API and a lot of syntactical sugar on top of the WebDriver specification. You can use WebdriverIO as a standalone package or via a testrunner using @wdio/cli. WebdriverIO allows to run tests locally using the WebDriver or Chrome DevTools protocol. WebDriverIO framework is being widely used by the testing community to perform automation testing on both web applications and native mobile applications. The tests performed on WebdriverIO are simple and concise. Also, you can control browsers with just a few lines of code. All these reasons have made testers adopt WebDriverIO to fulfill their browser testing needs

## Version
1.0.0

## Frameworks
- WebdriverIO
- Mocha & Chai

## Features
- Page Object Model
- Allure Report

## Requirements
- Node version 10 or higher

## Setup
```
$ mkdir auto-test
$ cd auto-test
$ git clone https://github.com/luckhiem/aspire-automation-framework.git
$ cd aspire-auto-framework
$ npm install
```

## Run Test
1. At ./src/EnvConfig.json
```
Config url
```
2. Run web automation test
```
$ npm run test
```
## Report
After executing test, run comand to generate html report
```
$ npm run generate-reports
``` 

# Framework structure
The framework base on WebdriverIO & Mocha
```
├── resource                         // folder contains data for framework (json, excel, csv, png ...)        
├── src
│   ├── common                       // folder includes common funcions/ultilities that can used in all project
│   ├── enity                        // folder includes file define entity model project
│   ├── pages
│   │   ├──login                     // folder contains page object for using automate authentication page
│   |── test_scripts                 // folder includes test script for web automation
│   |── utils                        // folder includes common funcions/ultilities that can used in all project
│   |── config.js                    // file includes all config that can used in the project
│   |── environment.json             // file includes the information to using for this project (domain, admin...)
│── package.json                     // file to manage all dependencies to using in this project
│── test-web.conf.js                 // config file to execute test in web
│── test-ci.conf.js                  // config file to execute test in CI
```
