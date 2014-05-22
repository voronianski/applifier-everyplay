define(['app', 'services/everyplay'], function (app) {
	'use strict';

	return app.controller('VideoDetailsCtrl', ['$scope', '$sce', 'everyplay', '$routeParams',
		function ($scope, $sce, everyplay, $routeParams) {
			everyplay.getVideo({ id: $routeParams.id }, function (video) {
				$scope.video = video;
				$scope.video.uri = 'http://static.everyplay.com/everyplay/videos/' + video.user_id + '/' + video.id + '/' + video.video_files.high;
			});

		}
	]);
});
