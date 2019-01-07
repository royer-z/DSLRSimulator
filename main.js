window.onload = function () {
	var wheel = new wheelnav("wheelDiv");
	wheel.markerEnable = true;
	wheel.wheelRadius = wheel.wheelRadius * .9291333333;
	wheel.createWheel();
}

function home() {
	var cameraScreen = document.getElementById("cameraScreen");
	
	cameraScreen.innerHTML = "<header><h1>Home</h1></header><article id='content'></article>";
}

function photo() {
	var cameraScreen = document.getElementById("cameraScreen");
	
	cameraScreen.innerHTML = "<header><h1>Photo</h1></header><article id='content'><div class='album'><img class='picture' src='content/snow_flake.jpg' alt='Snow flake' onclick='maximize_image(\"content/snow_flake.jpg\", \"Snow flake\");'><img class='picture' src='content/sunset_cat.jpg' alt='Sunset cat' onclick='maximize_image(\"content/sunset_cat.jpg\", \"Sunset cat\");'><img class='picture' src='content/rainy_alley.jpg' alt='Rainy alley' onclick='maximize_image(\"content/rainy_alley.jpg\", \"Rainy alley\");'><img class='picture' src='content/hawk.jpg' alt='Hawk' onclick='maximize_image(\"content/hawk.jpg\", \"Hawk\");'><img class='picture' src='content/foggy_morning.jpg' alt='Foggy morning' onclick='maximize_image(\"content/foggy_morning.jpg\", \"Foggy morning\");'><img class='picture' src='content/bird.jpg' alt='Bird' onclick='maximize_image(\"content/bird.jpg\", \"Bird\");'></div></article>";
}

function video() {
	var cameraScreen = document.getElementById("cameraScreen");
	
	cameraScreen.innerHTML = "<header><h1>Video</h1></header><article id='content'></article>";
}

function contact() {
	var cameraScreen = document.getElementById("cameraScreen");
	
	cameraScreen.innerHTML = "<header><h1>Contact</h1></header><article id='content'></article>";
}

function about() {
	var cameraScreen = document.getElementById("cameraScreen");
	
	cameraScreen.innerHTML = "<header><h1>About</h1></header><article id='content'></article>";
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