require.config({
	paths: {
		'angular' : '../bower_components/angular/angular',
		'ngResource': '../bower_components/angular-resource/angular-resource',
		'ngRoute': '../bower_components/angular-route/angular-route',
		'ngSanitize': '../bower_components/angular-sanitize/angular-sanitize',
		'underscore': '../bower_components/underscore/underscore'
	},
	shim: {
		ngResource: {
			deps: ['angular']
		},
		ngRoute: {
			deps: ['angular']
		},
		ngSanitize: {
			deps: ['angular']
		},
		angular: {
			exports: 'angular'
		},
		underscore: {
			exports: '_'
		}
	},
	baseUrl: '/js'
});

require(['app', 'controllers/VideoListCtrl', 'controllers/VideoDetailsCtrl'], function (app) {
	app.init();
});
