define(['angular', 'underscore', 'app', 'services/everyplay'], function (angular, _, app) {
	'use strict';

	return app.controller('VideoListCtrl', ['$scope', 'everyplay',
		function ($scope, everyplay) {
			$scope.games = [];
			everyplay.getAllVideos({ order: 'popularity_alltime' }, function (videos) {
				_(videos).each(function (video) {
					var duplicate = _($scope.games).find(function (game) {
						return game === video.game.name;
					});
					if (!duplicate) {
						$scope.games.push(video.game.name);
					}
				});
				$scope.videos = videos;
			});
		}
	]);
});
