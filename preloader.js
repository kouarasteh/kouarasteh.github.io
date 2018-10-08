// better image preloading @ https://perishablepress.com/press/2009/12/28/3-ways-preload-images-css-javascript-ajax/
function preloader() {
	if (document.getElementById) {
		document.getElementById("preload-01").style.background = "url(http://kourosharasteh.com/images/headshot.png) no-repeat -9999px -9999px";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);
window.alert("LOADED")
