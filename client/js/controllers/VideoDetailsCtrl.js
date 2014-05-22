define(['app', 'services/everyplay', 'services/preloader'], function (app) {
	'use strict';

	return app.controller('VideoDetailsCtrl', ['$scope', '$sce', 'everyplay', '$routeParams', 'preloader',
		function ($scope, $sce, everyplay, $routeParams, preloader) {
			preloader.loading();

			everyplay.getVideo({ id: $routeParams.id }, function (video) {
				$scope.video = video;
				$scope.video.uri = 'http://static.everyplay.com/everyplay/videos/' + video.user_id + '/' + video.id + '/' + video.video_files.high;

				preloader.ready();
			});
		}
	]);
});
