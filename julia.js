var c = document.getElementById("canvas");
c.width = 2000;
c.height = c.height;

var center=c.width/2;

var scaling=2/c.width;

var iterations = 500;

var xIters=c.height;
var yIters=c.height;

var ctx = c.getContext("2d");

var r = 2;
var g = 1;
var b = 5;


var colors = new Array(20);

for(var i=0;i<colors.length;i++)
{
	colors[i] = new Array(3);
	colors[i][0]=255-(i*255/colors.length * r) % 256;
	colors[i][1]=255-(i*255/colors.length * g) % 256;
	colors[i][2]=255-(i*255/colors.length * b) % 256;
}



//var realConst=-.7269;
//var imaginaryConst=0.1889;
var realConst=-.8;
var imaginaryConst=.156;

var breakout=2;
var colorScaler= 100


function uber(complexNumber)
{
	var realPart=complexNumber[0]*complexNumber[0]-complexNumber[1]*complexNumber[1]+realConst;
	var imaginaryPart=complexNumber[0]*complexNumber[1]*2 + imaginaryConst;
	return [realPart,imaginaryPart];
}

function draw(x,y,color,size){
    ctx.beginPath();
	ctx.fillStyle=color;
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();

}

var y=0;

function fractal()
{
	for(var x=0;x<xIters;x++)
	{
		var complexNumber = [(x-center)*scaling,(y-center)*scaling];
		var i =0
		while(i<iterations && complexNumber[0]*complexNumber[0]+complexNumber[1]*complexNumber[1]<breakout*breakout)
		{
			complexNumber = uber(complexNumber);
			i++;
		}
		if((Math.sqrt(complexNumber[0]*complexNumber[0]+complexNumber[1]*complexNumber[1])<=1 ))
		{
			draw(x,y,'rgb(0,0,0)',1);
		}
		else
		{
			draw(x,y,'rgb('+colors[i%colors.length][0]+','+colors[i%colors.length][1]+','+colors[i%colors.length][2]+")",1)
		}
	}
	y++;
	if(y<yIters)
	{
		setTimeout(fractal,0)
	}
}

fractal();







