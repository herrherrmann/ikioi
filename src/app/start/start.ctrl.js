angular.module('ikioi')

.controller('StartCtrl', ($scope, $timeout, backgroundVideo) => {
	$scope.setPlaylistMode = setPlaylistMode;
	$scope.selectSong = selectSong;
	$scope.playPause = playPause;

	const songDirectory = 'assets/audio/';
	let player = {};
	$scope.playlistMode = false;
	$scope.playlistModeSelected = false;
	$scope.currentSong = null;
	$scope.isPlaying = false;
	$scope.isLoading = false;

	$scope.songs = [{
		name: 'Produkt Productions Inc.',
		index: 0,
		icon: '',
		resource: '1-produktproductionsinc',
		lyrics: `Den Weg nach oben/unten musst du alleine gehen<br>
Besser gehen, als bei lebendigem Leibe zu verwesen, sag ich mal<br>
Aber ich sag ja auch: "Lass die Pumpe mal machen! Unternimm nichts!"<br>
Denn Unternehmen, das wissen wir, funktionieren nur sehr fragmentarisch<br>
Und eigentlich kannst du ja auch etwas damit anfangen, ist ja klar<br>
Ist ja klar, dass du deshalb nie etwas anfängst, weil du etwas damit anfangen könntest<br>
Ist ja klar<br>
Und ich sag noch: "Nimm die Abkürzung! Wer nicht fühlen will, muss fühlen!"<br>
Nun gut, du hast die Qual, jedoch: Die Option existiert<br>
Apropos Wahrnehmung: Freunde sind kontraproduktive Faktoren<br>
Also, ich meine, kontraproduktive Faktoren sind Freunde`
	}, {
		name: 'Apollo Nölf',
		index: 1,
		icon: '',
		resource: '2-apollonoelf',
		lyrics: `Wann immer ich kann, bin ich der Unruhestifter auf dem Mond<br>
Ich nehme meine lautesten Instrumente und springe meterhoch ins Vakuum<br>
Und dort stifte ich dann Unruhe<br>
Einfach so, vor mich hin, mache ich bei Ebbe auf die Flut aufmerksam<br>
Einfach so, um mich herum, auf dem Mond<br>
Es tut mir ja Leid, aber denkt doch mal an die Dämme<br>
Und komm mir nicht mit: "Auf dem Mond gibt es gar keine Gezeiten."<br>
Wenn ich will, gibt es sogar Leben auf dem Mond`
	}, {
		name: 'Bitter Lemming',
		index: 2,
		icon: '',
		resource: '3-bitterlemming',
		lyrics: `Wenn dir das Leben Zitronen schenkt, lass sie verrotten<br>
Meine Weitsicht lässt nichts zu<br>
Uns allen drückt der Schuh<br>
Ich bin farbenblind vor Wut<br>
Ich bin farbenblind<br>
Nein, du bist nicht die Einzige, aber das könnte auch der Vorwurf sein<br>
Nein, du bist nicht der Einzige, aber das könnte auch der Vorwurf sein`
	}, {
		name: 'Kosmopilot',
		index: 3,
		icon: '',
		resource: '4-kosmopilot',
		lyrics: `Pass voller Farbe und die Beine voller Blutgerinsel<br>
Weder hier und jetzt, noch wo und wann komme ich an<br>
Anhand von Signa kann ich genau sehen wie viel ich bin<br>
Was ja in Ordnung ist<br>
Was ja gelogen ist<br>
Was ja in Ordnung ist<br>
Ein nicht heraufbeschworener Absturz steht einem heraufbeschworenen Absturz in nichts nach<br>
Übrigens auch die Begründung für mein Tun und Zutun<br>
Falls sich noch jemand wundert:<br>
Ich bin Gottlos`
	}, {
		name: 'Entertainmentbrandstiftung',
		index: 4,
		icon: '',
		resource: '5-entertainmentbrandstiftung',
		lyrics: `Wie Schelme schauen wir, vor allem und nur zu<br>
Lassen wir uns mitreißen, von allem, um zu ruhen<br>
Gesicht noch immer schelmisch<br>
Entertainment, Brandstiftung, Entertainmentbrandstiftung<br>
Feuer! Und wir ruhen<br>
Wir erwarten viel von nichts<br>
Wir bauen Türen, vor allem und nur zu<br>
Vom vielen Bauen so angestrengt legen wir uns hin und wir ruhen<br>
Indes brennt unsere Liegestatt ab<br>
Decke über den Kopf, liegen bleiben<br>
Es wird wärmer und wir ruhen<br>
Und du magst dieses Leben nicht<br>
Das Sedativ macht apathisch<br>
Legt fest, wann für dich Mittag ist<br>
Und ob es Gründe zum Schreien gibt`
	}, {
		name: 'Ferdina',
		index: 5,
		icon: '',
		resource: '6-ferdina',
		lyrics: `Vergleiche liegen mir so unerreichbar fern<br>
Zum Vergleich hab' ich da mal was vorbereitet<br>
Die dritte Person kann es besser als die zweite<br>
Steinigt alle, die denken, sie lebten hier Elle an Elle<br>
Rote Armbinden, ein A, ein Kreis drum, drei Punkte`
	}, {
		name: 'Killerwels in Wildweser',
		index: 6,
		icon: '',
		resource: '7-killerwelsinwildweser',
		lyrics: `Es wird ein schöner Tag - der Tag an dem die Segel reißen<br>
Wir könnten schwimmen, wir könnten einfach ewig treiben<br>
Sind jetzt deformiert vom Wasser<br>
müssen schwimmen, ob wir wollen oder nicht und ob wir können oder nicht<br>
Ich war noch nie ein guter Schwimmer<br>
Ich versinke, du bist eine Wasserleiche<br>
Es ist ein schöner Tag`
	}];

	function initialize() {
		resetPercentages();
		$timeout(() => {
			player = document.getElementById('audio-player');
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
				backgroundVideo.setBackgroundVideo($scope.currentSong.resource);
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
			$scope.isPlaying = false;
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

	function initializePlayer(song) {
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
		$scope.isPlaying = true;
		$scope.isLoading = false;
	}

	function pause() {
		player.pause();
		$scope.isPlaying = false;
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
