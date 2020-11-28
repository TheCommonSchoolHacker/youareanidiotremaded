var isWhite = true;
var intervLoop = setInterval(floop, 400);

function floop() {
	isWhite = !isWhite;
	if (!isWhite)
		document.getElementById("flimg").src = "black.png";
	else
		document.getElementById("flimg").src = "white.png";
}

function PlayAudio() {
	document.getElementById("hahaha").play();
}