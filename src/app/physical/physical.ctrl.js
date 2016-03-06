angular.module('ikioi')

.controller('PhysicalCtrl', ($scope, Lightbox) => {
	$scope.openModal = openModal;

	$scope.images = {
		disc: [],
		poster: []
	};

	$scope.images.disc = [{
		url: 'assets/img/shop/disc-1.jpg'
	}, {
		url: 'assets/img/shop/disc-2.jpg'
	}, {
		url: 'assets/img/shop/disc-3.jpg'
	}, {
		url: 'assets/img/shop/disc-4.jpg'
	}, {
		url: 'assets/img/shop/disc-5.jpg'
	}, {
		url: 'assets/img/shop/disc-6.jpg'
	}, {
		url: 'assets/img/shop/disc-7.jpg'
	}];

	$scope.images.poster = [{
		url: 'assets/img/shop/poster.jpg'
	}];

	angular.forEach($scope.images.disc, (image, index) => {
		image.index = index;
	});

	function openModal(name) {
		Lightbox.openModal($scope.images[name], 0);
	}

});
