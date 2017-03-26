angular.module('ikioi').controller('LiveCtrl', ($scope, EVENTS) => {

	init();

	function init() {
		const today = new Date();
		$scope.events = EVENTS
			.sort((eventA, eventB) => (eventB.date.getTime() - eventA.date.getTime()))
			.map((event, index) => {
				event.number = getNumberString(EVENTS.length - index);
				event.inPast = event.date.getTime() <= today.getTime();
				return event;
			});
	}

	function getNumberString(index) {
		let numberString = '#';
		if (index < 10) {
			numberString += '0';
		}
		if (index < 100) {
			numberString += '0';
		}
		numberString += index;
		return numberString;
	}
});
