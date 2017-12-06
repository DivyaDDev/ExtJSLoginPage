Ext.Loader.setConfig ({enabled: true});

Ext.application ({
	 controllers:[ 'loginApp.controller.loginController' ],
	 views: [ 'loginApp.view.main.login' ],
	 autoCreateViewport: false,
     name: 'loginApp',
     
     launch: function () {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;
        var htmlReporter = new jasmine.HtmlReporter();
        jasmineEnv.addReporter(htmlReporter);
        jasmineEnv.execute();
    }
});
