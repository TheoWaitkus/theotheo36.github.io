var c = document.getElementById("canvas");
c.width = 2000;
c.height = c.height;

var center=c.width/2;

var scaling=2/c.width;

var iterations = 255;

var xIters=c.height;
var yIters=c.height;

var ctx = c.getContext("2d");

var realConst=-.7269;
var imaginaryConst=0.1889;

var breakout=500;



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
		console.log(i);
		if((Math.sqrt(complexNumber[0]*complexNumber[0]+complexNumber[1]*complexNumber[1])<=1 ))
		{
			draw(x,y,'rgb('+x*255/xIters+','+y*255/yIters+','+0+')',1);
		}
		else
		{
			var derivative=2*(Math.sqrt(((x-center)*scaling)*((x-center)*scaling)+((y-center)*scaling)*(y-center)*scaling));
			if(i<230)
			{
				i=255/derivative;
			}
			var colorR=i;
			var colorG=0
			var colorB=0
			draw(x,y,'rgb('+colorG+','+colorG+','+colorR+')',.5)
		}
	}
	y++;
	if(y<yIters)
	{
		setTimeout(fractal,0)
	}
}

fractal();







