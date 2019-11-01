var c = document.getElementById("canvas");
c.width = 2000;
c.height = c.height;

var center=c.width/2;

var scaling=2/c.width;

var iterations = 300;



var ctx = c.getContext("2d");

var realConst=-.7269;
var imaginaryConst=0.1889;



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

for(var x=0;x<c.width;x++)
{
	for(var y=0;y<c.height;y++)
	{
		var complexNumber = [(x-center)*scaling,(y-center)*scaling];
		
		for(var i=0;i<iterations;i++)
		{
			complexNumber = uber(complexNumber);
		}
		if((Math.sqrt(complexNumber[0]*complexNumber[0]+complexNumber[1]*complexNumber[1])<=1 ))
		{
			draw(x,y,'rgb(34,9,84)',1);
		}
		else
		{
			var derivative=2*(Math.sqrt(((x-center)*scaling)*((x-center)*scaling)+((y-center)*scaling)*(y-center)*scaling));
			
			var colorR=255/derivative;
			var colorG=0
			var colorB=0
			draw(x,y,'rgb('+colorG+','+colorR+','+colorR+')',.5)
		}
		
	}
	
}




