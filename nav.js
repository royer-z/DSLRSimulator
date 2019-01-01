window.onload = function () {
	var wheel = new wheelnav("wheelDiv");
	wheel.markerEnable = true;
	wheel.markerAttr = { fill: '#000000', stroke: '#000000' };
	wheel.navAngle = -180;
	wheel.createWheel(["photo", "video", "contact", "about", "", ""]);
}