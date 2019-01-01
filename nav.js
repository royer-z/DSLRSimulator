window.onload = function () {
	var wheel = new wheelnav("wheelDiv");
	wheel.markerEnable = true;
	wheel.markerAttr = { fill: "#000000", stroke: "#000000" };
}

function photo() {
	var output = document.getElementById("cameraScreen");
	
	output.innerHTML = "<header><h1>Photo</h1></header><article id='content'></article>";
}

function video() {
	var output = document.getElementById("cameraScreen");
	
	output.innerHTML = "<header><h1>Video</h1></header><article id='content'></article>";
}

function contact() {
	var output = document.getElementById("cameraScreen");
	
	output.innerHTML = "<header><h1>Contact</h1></header><article id='content'></article>";
}

function about() {
	var output = document.getElementById("cameraScreen");
	
	output.innerHTML = "<header><h1>About</h1></header><article id='content'></article>";
}