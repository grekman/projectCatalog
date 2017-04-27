var sdvig = 0;

function f1(){
	if (sdvig == -726) {
		// sdvig = -242;
	}
	else {
		sdvig = sdvig - 242;
	}
	var line;
	line = document.getElementById('line');
	line.style.marginLeft = sdvig + 'px';
}

function f2(){
	if (sdvig == 0) {
		// sdvig = 0;
	}
	else {
		sdvig = sdvig + 242;
	}
	var line;
	line = document.getElementById('line');
	line.style.marginLeft = sdvig + 'px';
}
