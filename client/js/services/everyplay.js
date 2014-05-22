define(['app'], function (app) {
	'use strict';

	app.factory('everyplay', ['$resource', function ($resource) {
		var paramDefaults = {
			offset: 0,
			client_id: '7c2ea3d088dd070323b77337d767d15bd8ff7f60'
		};

		var actions = {
			getAllVideos: {
				method: 'GET',
				isArray: true,
				cache: true,
				params: { resource: 'videos', limit: 50 }
			},

			getVideo: {
				method: 'GET',
				params: { resource: 'videos' }
			}
		};

		return $resource('https://everyplay.com/api/:resource/:id', paramDefaults, actions);
	}]);
});
