angular.module('ikioi')

.controller('StartCtrl', ($scope) => {

	$scope.currentSong = null;
	$scope.selectSong = selectSong;

	const songDirectory = 'assets/audio/';

	$scope.songs = [{
		name: 'Produkt Productions Inc.',
		icon: '',
		video: '',
		audio: '1-produktproductionsinc.mp3',
		lyrics: `Den Weg nach oben/unten musst du alleine gehen
Besser gehen, als bei lebendigem Leibe zu verwesen, sag ich mal
Aber ich sag ja auch: "Lass die Pumpe mal machen! Unternimm nichts!"
Denn Unternehmen, das wissen wir, funktionieren nur sehr fragmentarisch
Und eigentlich kannst du ja auch etwas damit anfangen, ist ja klar
Ist ja klar, dass du deshalb nie etwas anfängst, weil du etwas damit anfangen könntest
Ist ja klar
Und ich sag noch: "Nimm die Abkürzung! Wer nicht fühlen will, muss fühlen!"
Nun gut, du hast die Qual, jedoch: Die Option existiert
Apropos Wahrnehmung: Freunde sind kontraproduktive Faktoren
Also, ich meine, kontraproduktive Faktoren sind Freunde`
	}, {
		name: 'Apollo Nölf',
		icon: '',
		video: '',
		audio: '.mp3',
		lyrics: `Wann immer ich kann, bin ich der Unruhestifter auf dem Mond
Ich nehme meine lautesten Instrumente und springe meterhoch ins Vakuum
Und dort stifte ich dann Unruhe
Einfach so, vor mich hin, mache ich bei Ebbe auf die Flut aufmerksam
Einfach so, um mich herum, auf dem Mond
Es tut mir ja Leid, aber denkt doch mal an die Dämme
Und komm mir nicht mit: "Auf dem Mond gibt es gar keine Gezeiten."
Wenn ich will, gibt es sogar Leben auf dem Mond`
	}, {
		name: 'Bitter Lemming',
		icon: '',
		video: '',
		audio: '.mp3',
		lyrics: `Wenn dir das Leben Zitronen schenkt, lass sie verrotten
Meine Weitsicht lässt nichts zu
Uns allen drückt der Schuh
Ich bin farbenblind vor Wut
Ich bin farbenblind
Nein, du bist nicht die Einzige, aber das könnte auch der Vorwurf sein
Nein, du bist nicht der Einzige, aber das könnte auch der Vorwurf sein`
	}, {
		name: 'Kosmopilot',
		icon: '',
		video: '',
		audio: '.mp3',
		lyrics: `Pass voller Farbe und die Beine voller Blutgerinsel
Weder hier und jetzt, noch wo und wann komme ich an
Anhand von Signa kann ich genau sehen wie viel ich bin
Was ja in Ordnung ist
Was ja gelogen ist
Was ja in Ordnung ist
Ein nicht heraufbeschworener Absturz steht einem heraufbeschworenen Absturz in nichts nach
Übrigens auch die Begründung für mein Tun und Zutun
Falls sich noch jemand wundert:
Ich bin Gottlos`
	}, {
		name: 'Entertainmentbrandstiftung',
		icon: '',
		video: '',
		audio: '.mp3',
		lyrics: `Wie Schelme schauen wir, vor allem und nur zu
Lassen wir uns mitreißen, von allem, um zu ruhen
Gesicht noch immer schelmisch
Entertainment, Brandstiftung, Entertainmentbrandstiftung
Feuer! Und wir ruhen
Wir erwarten viel von nichts
Wir bauen Türen, vor allem und nur zu
Vom vielen Bauen so angestrengt legen wir uns hin und wir ruhen
Indes brennt unsere Liegestatt ab
Decke über den Kopf, liegen bleiben
Es wird wärmer und wir ruhen
Und du magst dieses Leben nicht
Das Sedativ macht apathisch
Legt fest, wann für dich Mittag ist
Und ob es Gründe zum Schreien gibt`
	}, {
		name: 'Ferdina',
		icon: '',
		video: '',
		audio: '.mp3',
		lyrics: `Vergleiche liegen mir so unerreichbar fern
Zum Vergleich hab' ich da mal was vorbereitet
Die dritte Person kann es besser als die zweite
Steinigt alle, die denken, sie lebten hier Elle an Elle
Rote Armbinden, ein A, ein Kreis drum, drei Punkte`
	}, {
		name: 'Killerwels in Wildweser',
		icon: '',
		video: '',
		audio: '.mp3',
		lyrics: `Es wird ein schöner Tag - der Tag an dem die Segel reißen
Wir könnten schwimmen, wir könnten einfach ewig treiben
Sind jetzt deformiert vom Wasser
müssen schwimmen, ob wir wollen oder nicht und ob wir können oder nicht
Ich war noch nie ein guter Schwimmer
Ich versinke, du bist eine Wasserleiche
Es ist ein schöner Tag`
	}];

	function selectSong(song) {
		$scope.currentSong = song;
	}

});
