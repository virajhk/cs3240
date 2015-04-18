function goToWeigh() {
	var location = document.location.href.toString();
	var index = location.indexOf('cs3240/') + 7;
	var newLocation = location.substr(0, index);
	document.location.href = newLocation + "/views/weigh.html";
}

function goToScan() {
	var location = document.location.href.toString();
	var index = location.indexOf('cs3240/') + 7;
	var newLocation = location.substr(0, index);
	document.location.href = newLocation + "/views/scan.html";
}

var sound = false;

function setSoundOn() {
	localStorage.setItem('sound', 'true');
}

function setSoundOff() {
	localStorage.setItem('sound', 'false');
}

function playHelpSound () {
	$('#help-button').append("<audio style='display:none;' autoplay='true' src='../audio/help.mp3'>");
}