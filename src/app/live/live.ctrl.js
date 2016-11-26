angular.module('ikioi')

.controller('LiveCtrl', ($scope) => {
	const today = new Date();
	$scope.events = [{
		date: new Date(2017, 3, 26),
		location: 'darmstadt, oetinger villa',
		support: 'for them all, frau ruth',
	}, {
		date: new Date(2016, 11, 7),
		location: 'kassel, goldgrube',
		support: 'larbre bizzarre',
	}, {
		date: new Date(2016, 10, 12),
		location: 'erlangen, juz',
		support: 'ille tanten',
	}, {
		date: new Date(2016, 10, 10),
		location: 'leipzig, dr. seltsam',
	}, {
		date: new Date(2016, 9, 23),
		location: 'saarbrücken, tjurip',
		support: 'visaya, fluffy floor, pretty lightning',
	}, {
		date: new Date(2016, 9, 11),
		location: 'wiesbaden, schlachthof',
		support: 'self defense family, creative adult',
	}, {
		date: new Date(2016, 5, 22),
		location: 'frankfurt, klapperfeld',
		support: 'amygdala, cady',
	}, {
		date: new Date(2016, 3, 16),
		location: 'bremen, spedition',
		support: 'analog ruins, schadensersatz in form von gerümpel',
	}, {
		date: new Date(2016, 3, 15),
		location: 'dortmund, currystübchen bunker',
		support: 'kalkavé, brookland',
	}, {
		date: new Date(2016, 3, 14),
		location: 'hannover, ujz korn',
		support: 'snarg',
	}, {
		date: new Date(2015, 9, 17),
		location: 'kassel, hegelsburgfest',
	}, {
		date: new Date(2015, 9, 11),
		location: 'mainz, haus mainusch',
		support: 'antenna, no surprising news',
	}, {
		date: new Date(2015, 9, 8),
		location: 'graz, sub',
		support: 'tiger magic',
	}, {
		date: new Date(2015, 9, 7),
		location: 'wien, au (im rahmen von bioskop',
	}, {
		date: new Date(2015, 9, 4),
		location: 'warszawa, chmury',
		support: 'the lights',
	}, {
		date: new Date(2015, 9, 2),
		location: 'berlin, zuhause',
	}, {
		date: new Date(2015, 9, 1),
		location: 'dresden, meschwitzer straße',
		support: 'junost, isolate',
	}, {
		date: new Date(2015, 4, 17),
		location: 'kassel, nordstadtpalast',
	}, {
		date: new Date(2015, 4, 15),
		location: 'hannover, stumpf',
		support: 'objet petit a',
	}, {
		date: new Date(2015, 4, 14),
		location: 'marburg, café trauma',
		support: 'yon, pigeon',
	}, {
		date: new Date(2015, 1, 6),
		location: 'offenbach, kommune 2010',
		support: 'fuck, wolves!',
	}, {
		date: new Date(2015, 0, 17),
		location: 'mainz, haus mainusch',
		support: 'the tourist; mødi',
	}, {
		date: new Date(2014, 5, 14),
		location: 'berlin, x-b liebig hoffest',
		support: 'respect my fist; nervöus u.a.',
	}, {
		date: new Date(2014, 5, 13),
		location: 'leipzig, atari',
		support: 'the caulfield cult; godard; omare',
	}, {
		date: new Date(2014, 5, 7),
		location: 'freiburg, kts (20 jahre kts jubiläum)',
	}, {
		date: new Date(2014, 5, 6),
		location: 'landau, fatal',
		support: 'departure kids',
	}, {
		date: new Date(2014, 4, 23),
		location: 'köln, privat',
		support: 'rollergirls, birmingham pines',
	}, ];

	init();

	function init() {
		$scope.events.forEach((event, index) => {
			event.number = getNumberString($scope.events.length - index);
			if (event.date.getTime() < today.getTime()) {
				event.inPast = true;
			} else {
				event.inPast = false;
			}
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
