var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var epochs=300000;
var point1x;
var point1y;
var point1done=false;
var point2x;
var point2y;
var point2done=false;
var point3x;
var point3y;
var point3done=false;
var currentx=Math.floor(Math.random() * 1000) +1;
var currenty=Math.floor(Math.random() * 1000) +1;
var updatex;
var updatey;
var strength=1;
var done=false;
function start(){

    ctx.beginPath();
    ctx.rect(point2x, point2y, 4, 4);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(point3x, point3y, 4, 4);
    ctx.fillStyle = "red";
    ctx.fill();
    
}
function draw(pointx,pointy){
    ctx.beginPath();
    updatex=Math.abs((pointx-currentx)/2);
    updatey=Math.abs((pointy-currenty)/2);
    var newx=Math.max(currentx,pointx);
    var newy=Math.max(currenty,pointy);
    currentx=newx-updatex;
    currenty=newy-updatey;
    ctx.rect(currentx,currenty,strength,strength);
    ctx.fillStyle='black';
    ctx.fill();
    
}  
function iterate(){
    for (var count=0; count < epochs; count++){
        var number=Math.floor(Math.random() * 3) + 1;
        if (number==1){
            draw(point1x,point1y);
        }
        if (number==2){
            draw(point2x,point2y);
        }
        if (number==3){
            draw(point3x,point3y);
        }
    }   
}
function getMousePos(event) {
	var x =event.clientX;
	var y = event.clientY;
	if(point1done==false){
		point1x=x;
		point1y=y;
		point1done=true;
		ctx.beginPath();
    	ctx.rect(point1x, point1y, 10, 10);
    	ctx.fillStyle = "red";
    	ctx.fill();
		console.log("fist click");
	}else{
		if(point2done==false){
			point2x=x;
			point2y=y;
			point2done=true;
			ctx.beginPath();
    		ctx.rect(point2x, point2y, 10, 10);
    		ctx.fillStyle = "red";
    		ctx.fill();
			console.log("second click");
		}else{
			if(point3done==false){
				point3x=x;
				point3y=y;
				console.log("third click");
				    ctx.beginPath();
    ctx.rect(point3x, point3y, 10, 10);
    ctx.fillStyle = "red";
    ctx.fill();
				point3done=true;
				start();
				iterate();
			}
		
		}
		
	
	}
}

document.addEventListener("click", getMousePos);

//done=true;
if(done==true){
start();
iterate();
    
}
