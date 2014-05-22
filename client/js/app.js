define([
	'angular',
	'ngRoute',
	'ngResource',
	'ngSanitize'
], function (angular) {
	'use strict';

	var app = angular.module('applifierTest', ['ngRoute', 'ngResource', 'ngSanitize']);

	app.init = function () {
		angular.bootstrap(document, ['applifierTest']);
	};

	app.config(['$routeProvider', '$locationProvider', '$sceProvider',
		function ($routeProvider, $locationProvider, $sceProvider) {
			$routeProvider
				.when('/', { templateUrl: 'videoListView', controller: 'VideoListCtrl' })
				.when('/video/:id', { templateUrl: 'videoDetailsView', controller: 'VideoDetailsCtrl' })
				.otherwise({ redirectTo: '/' });

			$sceProvider.enabled(false);
			$locationProvider.html5Mode(true);
		}
	]);

	return app;
});
