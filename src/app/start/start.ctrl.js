angular.module('ikioi')

.controller('StartCtrl', ($scope, $rootScope, $timeout) => {
	$scope.setPlaylistMode = setPlaylistMode;
	$scope.selectSong = selectSong;
	$scope.playPause = playPause;

	const songDirectory = 'assets/audio/';
	let player = {};
	$scope.playlistMode = false;
	$scope.playlistModeSelected = false;
	$scope.currentSong = null;
	$scope.isLoading = false;

	$scope.songs = [{
		name: 'produkt productions inc.',
		index: 0,
		icon: '',
		resource: '1-produktproductionsinc',
		lyrics: `den weg nach oben/unten musst du alleine gehen<br>
besser gehen, als bei lebendigem leibe zu verwesen, sag ich mal<br>
aber ich sag ja auch: "lass die pumpe mal machen! unternimm nichts!"<br>
denn unternehmen, das wissen wir, funktionieren nur sehr fragmentarisch<br>
und eigentlich kannst du ja auch etwas damit anfangen, ist ja klar<br>
ist ja klar, dass du deshalb nie etwas anfängst, weil du etwas damit anfangen könntest<br>
ist ja klar<br>
und ich sag noch: "nimm die abkürzung! wer nicht fühlen will, muss fühlen!"<br>
nun gut, du hast die qual, jedoch: die option existiert<br>
apropos wahrnehmung: freunde sind kontraproduktive faktoren<br>
also, ich meine, kontraproduktive faktoren sind freunde`
	}, {
		name: 'apollo nölf',
		index: 1,
		icon: '',
		resource: '2-apollonoelf',
		lyrics: `wann immer ich kann, bin ich der unruhestifter auf dem mond<br>
ich nehme meine lautesten instrumente und springe meterhoch ins vakuum<br>
und dort stifte ich dann unruhe<br>
einfach so, vor mich hin, mache ich bei ebbe auf die flut aufmerksam<br>
einfach so, um mich herum, auf dem mond<br>
es tut mir ja leid, aber denkt doch mal an die dämme<br>
und komm mir nicht mit: "auf dem mond gibt es gar keine gezeiten."<br>
wenn ich will, gibt es sogar leben auf dem mond`
	}, {
		name: 'bitter lemming',
		index: 2,
		icon: '',
		resource: '3-bitterlemming',
		lyrics: `wenn dir das leben zitronen schenkt, lass sie verrotten<br>
meine weitsicht lässt nichts zu<br>
uns allen drückt der schuh<br>
ich bin farbenblind vor wut<br>
ich bin farbenblind<br>
nein, du bist nicht die einzige, aber das könnte auch der vorwurf sein<br>
nein, du bist nicht der einzige, aber das könnte auch der vorwurf sein`
	}, {
		name: 'kosmopilot',
		index: 3,
		icon: '',
		resource: '4-kosmopilot',
		lyrics: `pass voller farbe und die beine voller blutgerinsel<br>
weder hier und jetzt, noch wo und wann komme ich an<br>
anhand von signa kann ich genau sehen wie viel ich bin<br>
was ja in ordnung ist<br>
was ja gelogen ist<br>
was ja in ordnung ist<br>
ein nicht heraufbeschworener absturz steht einem heraufbeschworenen absturz in nichts nach<br>
übrigens auch die begründung für mein tun und zutun<br>
falls sich noch jemand wundert:<br>
ich bin gottlos`
	}, {
		name: 'entertainmentbrandstiftung',
		index: 4,
		icon: '',
		resource: '5-entertainmentbrandstiftung',
		lyrics: `wie schelme schauen wir, vor allem und nur zu<br>
lassen wir uns mitreißen, von allem, um zu ruhen<br>
gesicht noch immer schelmisch<br>
entertainment, brandstiftung, entertainmentbrandstiftung<br>
feuer! und wir ruhen<br>
wir erwarten viel von nichts<br>
wir bauen türen, vor allem und nur zu<br>
vom vielen bauen so angestrengt legen wir uns hin und wir ruhen<br>
indes brennt unsere liegestatt ab<br>
decke über den kopf, liegen bleiben<br>
es wird wärmer und wir ruhen<br>
und du magst dieses leben nicht<br>
das sedativ macht apathisch<br>
legt fest, wann für dich mittag ist<br>
und ob es gründe zum schreien gibt`
	}, {
		name: 'ferdina',
		index: 5,
		icon: '',
		resource: '6-ferdina',
		lyrics: `vergleiche liegen mir so unerreichbar fern<br>
zum vergleich hab' ich da mal was vorbereitet<br>
die dritte person kann es besser als die zweite<br>
steinigt alle, die denken, sie lebten hier elle an elle<br>
rote armbinden, ein a, ein kreis drum, drei punkte`
	}, {
		name: 'killerwels in wildweser',
		index: 6,
		icon: '',
		resource: '7-killerwelsinwildweser',
		lyrics: `es wird ein schöner tag - der tag an dem die segel reißen<br>
wir könnten schwimmen, wir könnten einfach ewig treiben<br>
sind jetzt deformiert vom wasser<br>
müssen schwimmen, ob wir wollen oder nicht und ob wir können oder nicht<br>
ich war noch nie ein guter schwimmer<br>
ich versinke, du bist eine wasserleiche<br>
es ist ein schöner tag`
	}];

	function initialize() {
		resetPercentages();
		$timeout(() => {
			player = document.getElementById('audio-player');
			$scope.player = player;
		});
	}
	initialize();

	function setPlaylistMode(mode) {
		if(!$scope.playlistModeSelected || $scope.playlistMode !== mode) {
			$scope.playlistMode = mode;
			$scope.playlistModeSelected = true;
			if($scope.playlistMode) {
				const firstSong = $scope.songs[0];
				selectSong(firstSong, true);
			}
		}
	}

	function resetPercentages() {
		angular.forEach($scope.songs, (song) => {
			song.percentage = 0;
		});
	}

	function selectSong(song, force) {
		// Prevent manual song selection in playlist mode.
		if($scope.playlistMode && !force) {
			return false;
		}
		if($scope.currentSong !== song || force) {
			// Select new song.
			resetPercentages();
			pause();
			$scope.currentSong = song;
			$timeout(() => {
				$rootScope.$broadcast('changeBackgroundVideo', $scope.currentSong.resource);
				setPlayerSource($scope.currentSong);
				initializePlayer();
			});
		} else {
			// Same song --> just toggle play/pause.
			playPause();
		}
	}

	const listeners = {
		onCanplay: () => {
			play();
		},
		onWaiting: () => {
			$scope.isLoading = true;
		},
		onTimeupdate: () => {
			updatePercentage($scope.currentSong);
		},
		onAbort: () => {
			player.removeEventListener('timeupdate', listeners.onTimeupdate);
			player.removeEventListener('canplay', listeners.onCanplay);
			player.removeEventListener('waiting', listeners.onWaiting);
			$scope.currentSong.percentage = 0;
		},
		onEnded: () => {
			player.removeEventListener('timeupdate', listeners.onTimeupdate);
			player.removeEventListener('canplay', listeners.onCanplay);
			player.removeEventListener('waiting', listeners.onWaiting);
			$scope.currentSong.percentage = 0;
			pause();
			const nextIndex = $scope.currentSong.index + 1;
			if(nextIndex < $scope.songs.length) {
				selectSong($scope.songs[nextIndex], true);
			}
		},
	};

	function initializePlayer() {
		$scope.isLoading = true;
		player.addEventListener('waiting', listeners.onWaiting, false);
		// Play when ready.
		player.addEventListener('canplay', listeners.onCanplay, false);
		// Update percentage while playing:
		player.addEventListener('timeupdate', listeners.onTimeupdate, false);
		// player.addEventListener('abort', listeners.onAbort, false);
		// Play next Song (if available).
		player.addEventListener('ended', listeners.onEnded, false);
	}

	/**
	 * Toggle between play/pause.
	 */
	function playPause() {
		if(player.paused) {
			play();
		} else {
			pause();
		}
	}

	function updatePercentage(song) {
		song.percentage = Number((player.currentTime / player.duration) * 100);
	}

	function play() {
		player.play();
		$scope.isLoading = false;
	}

	function pause() {
		player.pause();
		$scope.isLoading = false;
	}

	/**
	 * Set the player sources (mp3 + ogg), load the song and return true if there was a (song) change.
	 */
	function setPlayerSource(song) {
		let sources = {
			mp3Source: document.getElementById('mp3-source'),
			oggSource: document.getElementById('ogg-source')
		};
		if(sources.mp3Source.src !== songDirectory + song.resource + '.mp3') {
			// Stop media download (?).
			player.removeAttribute('src');
			// Set new sources.
			sources.mp3Source.src = songDirectory + song.resource + '.mp3';
			sources.oggSource.src = songDirectory + song.resource + '.ogg';
			player.load();
			// TODO: Handle media loading times?
		}
	}

});
