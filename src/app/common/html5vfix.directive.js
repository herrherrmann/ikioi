angular.module('ikioi')

.directive('html5vfix', ($rootScope) => {
	return {
		restrict: 'A',
		link: (scope, element, attr) => {
			attr.$set('src', attr.vsrc);
			$rootScope.$watch('currentPageName', () => {
				console.log('change detected!', attr);
				attr.$set('src', attr.vsrc);
			});
		}
	};
});
