var sliderBox = document.getElementById('sliderBox');
var slider = document.getElementById('slider');

function hideAddressBar() {
	if(!window.location.hash) {
		if(document.height <= window.outerHeight + 10) {
			setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
		}
		else {
			setTimeout( function(){ window.scrollTo(0, 1); }, 0 );
		}
	}
}

function changeOpacity(opacity) {
	document.getElementById("canvas").style.opacity = (opacity)/100;
}


function toggleSlider (e) {
	var display = sliderBox.style.display;
	if (display == 'block') {
		sliderBox.style.display = 'none';
	} else {
		sliderBox.style.display = 'block';
	}
}

function stopPropagation (e) {
	e.stopPropagation();
}

slider.addEventListener("touchend", stopPropagation);
slider.addEventListener("click", toggleSlider);
window.addEventListener("touchend", toggleSlider);
window.addEventListener("click", toggleSlider);
window.addEventListener("load", hideAddressBar );
window.addEventListener("orientationchange", hideAddressBar );
