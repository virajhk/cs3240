function goToWeigh() {
	var location = document.location.href.toString();
	var index = location.indexOf('views/') + 6;
	var newLocation = location.substr(0, index);
	document.location.href = newLocation + "weigh.html";
}

function goToScan() {
	var location = document.location.href.toString();
	var index = location.indexOf('views/') + 6;
	var newLocation = location.substr(0, index);
	document.location.href = newLocation + "scan.html";
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

function goToAdmin() {
	var location = document.location.href.toString();
	var index = location.indexOf('views/') + 6;
	var newLocation = location.substr(0, index);
	document.location.href = newLocation + "admin.html";
}