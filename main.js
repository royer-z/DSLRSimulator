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
	
	cameraScreen.innerHTML = "<header><h1>Photo</h1></header><article id='content'><div class='album'><img class='picture' src='content/raindrops on grass.jpg' alt='raindrops on grass' onclick='maximize_image(\"content/raindrops on grass.jpg\", \"raindrops on grass\");'><img class='picture' src='content/sunflower and manhattan.jpg' alt='sunflower and manhattan' onclick='maximize_image(\"content/sunflower and manhattan.jpg\", \"sunflower and manhattan\");'><img class='picture' src='content/tree in night exposure.jpg' alt='tree in night exposure' onclick='maximize_image(\"content/tree in night exposure.jpg\", \"tree in night exposure\");'><img class='picture' src='content/Wildwood beach pier silhouette.jpg' alt='Wildwood beach pier silhouette' onclick='maximize_image(\"content/Wildwood beach pier silhouette.jpg\", \"Wildwood beach pier silhouette\");'><img class='picture' src='content/bee on flower.jpg' alt='bee on flower' onclick='maximize_image(\"content/bee on flower.jpg\", \"bee on flower\");'><img class='picture' src='content/rainbow umbrellas.jpg' alt='rainbow umbrellas' onclick='maximize_image(\"content/rainbow umbrellas.jpg\", \"rainbow umbrellas\");'></div></article>";
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