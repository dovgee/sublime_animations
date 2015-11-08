//Heres a cute little animation I created a little while back//

var baloonPos = 200;
var x = 200;
var imageX = 300;
var imageY = 320;

var draw = function(trianglePos) {
	background(91, 188, 240);
	noStroke();

	fill(30, 189, 54);
	rect(-10,300,410,200);

	var BaloonPos = function() {
		fill(0, 123, 255);
		ellipse(x,baloonPos,100,100);
		triangle(x,baloonPos+50,x+11,x+68,x-10,x+68);
		line(x,x+50,x,x+110);
	}; 

	var BabyWinston = getImage("creatures/BabyWinston");
	image(BabyWinston,x-45,x+85,75,75);

	fill(20, 5, 5);
	textSize(13);
	text("Baby Winston Nooooo!",imageX-40,imageY);

	var anotherimage = getImage("creatures/Winston");
	image(anotherimage,imageX,imageY+10,60,60);
	imageX+=0;
	imageY+=-0;
	BaloonPos(x,x);
	baloonPos+=-1;
	x+=-1;


};