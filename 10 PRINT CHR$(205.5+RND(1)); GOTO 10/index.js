var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');

var WIDTH = canvas.width;
var HEIGHT = canvas.height;
var size = 5;

var x_sections = WIDTH / size;
var y_sections = HEIGHT / size;

function createLine(x, y, n) {
	context.beginPath();
	context.lineWidth = 3;
	if (n >= Math.random()) {
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
