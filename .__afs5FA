window.onload = function () {
	var wheel = new wheelnav("wheelDiv");
	wheel.markerEnable = true;
	wheel.wheelRadius = wheel.wheelRadius * .9291333333;
	wheel.createWheel();
}

function home() {
	$("#cameraScreen").load("view/home.html");
}

function photo() {
	$("#cameraScreen").load("view/photo.html");
}

function video() {
	$("#cameraScreen").load("view/video.html");
}

function contact() {
	$("#cameraScreen").load("view/contact.html");
}

function about() {
	$("#cameraScreen").load("view/about.html");
}

function maximize_image(path, alt) {
	var content = document.getElementById("content");
	
	var overlay = document.createElement("DIV");
	overlay.setAttribute("class", "overlay");
	
	var img = document.createElement("IMG");
	img.setAttribute("class", "expandedPicture");
	img.setAttribute("src", path);
	img.setAttribute("alt", alt);
	img.setAttribute("onclick", "minimize_image();");
	
	overlay.appendChild(img);
	content.appendChild(overlay);
}

function minimize_image() {
	var content = document.getElementById("content");
	
	content.removeChild(content.lastChild);
}