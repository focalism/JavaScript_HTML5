
function Line(){
    this.startx = 0;
    this.starty = 0;
    this.endx = 0;
    this.endy = 0;
    this.linewidth = 1;
}

Line.prototype.draw = function (context){
    context.beginPath();
    context.moveTo(this.startx,this.starty)
    context.lineTo(this.endx,this.endy)
    context.stroke()
    context.closePath()
};
