window.onload = function () {
	var wheel = new wheelnav("wheelDiv");
	wheel.markerEnable = true;
	wheel.markerAttr = { fill: "#000000", stroke: "#000000" };
}

function do_this() {
	var output = document.getElementById("cameraScreen");
	
	output.innerHTML += "<p>Hello!</p>";
}