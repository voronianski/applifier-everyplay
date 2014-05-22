define(['app'], function (app) {
	'use strict';

	app.factory('preloader', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
		var timer;

		return {
			ready: function (delay) {
				if (!delay || typeof delay !== 'number') {
					return ready();
				}

				timer = $timeout(ready, delay);

				function ready () {
					$timeout.cancel(timer);
					$rootScope.loaded = true;
				}
			},

			loading: function () {
				$timeout.cancel(timer);
				$rootScope.loaded = false;
			}
		};
	}]);
});
