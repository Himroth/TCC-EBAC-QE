const { join } = require('path')  

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
            './mobile/specs/gerarVariacaoProduto.e2ejs',
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
  

    framework: 'mocha',
    

    maxInstances: 1
    //reporters: ['spec'],


    //mochaOpts: {
      //  ui: 'bdd',
        //timeout: 300000
    },
}
