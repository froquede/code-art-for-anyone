var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');
context.imageSmoothingEnabled = true;

var WIDTH = canvas.width;
var HEIGHT = canvas.height;
var size = 30;

var x_sections = WIDTH / size;
var y_sections = HEIGHT / size;

function createLine(x, y, n) {
	context.beginPath();
	context.lineWidth = 15;
	// context.lineWidth += .015;
	context.lineCap = 'round';
	if (n >= Math.random() / 2) {
		context.moveTo(x, y);
		context.lineTo(x + size, y + size);
	}
	else {
		context.moveTo(x + size, y);
		context.lineTo(x, y + size);
	}
	context.stroke();
}

function draw() {
	context.clearRect(0, 0, WIDTH, HEIGHT);

	for (var x = 0; x < x_sections; x++) {
		for (var y = 0; y < y_sections; y++) {
			createLine(x * size, y * size, Math.random());
		}
	}

	// setTimeout(draw, 500);
}

draw();
