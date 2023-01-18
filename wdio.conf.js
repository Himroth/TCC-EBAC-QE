const { join } = require('path')
const allure = require('allure-commandline')

exports.config = {

    runner: 'local',
    port: 4723,
    path: '/wd/hub',

    specs: [
        './mobile/specs/**/*.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],
    suites: {
        catalogo: [
            './mobile/specs/acessarCatalogo.e2e.js',
            './mobile/specs/gerarVariacaoProduto.e2e.js',
            './mobile/specs/procurarProduto.e2e.js'
        ]
    },


    capabilities: [{
        "platformName": "Android",
        "platformVersion": "10.0",
        "deviceName": "Pixel XL API 29",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './mobile/android/loja-ebac.apk'),
        "appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity",
        'newCommandTimeout': 240
    }],

    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 300000,
    },

    framework: 'mocha',

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },




    //mochaOpts: {
    //  ui: 'bdd',
    //timeout: 300000


    maxInstances: 1
}
