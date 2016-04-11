'use strict';

angular.module('app.home')

.controller('HomeController', function ($scope) {
	$scope.images = imageHome;

});

var imageHome = [
"styles/img/superbox/superbox-full-1.jpg",
"styles/img/superbox/superbox-full-2.jpg",
"styles/img/superbox/superbox-full-3.jpg",
"styles/img/superbox/superbox-full-4.jpg",
"styles/img/superbox/superbox-full-5.jpg",
]