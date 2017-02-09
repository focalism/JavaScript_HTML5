
function Ball(radius,color){
    if (radius === undefined) {radius = 40}
    if (color === undefined) {color = "#ff0000"}
    this.x = 0;
    this.y = 0;
    this.radius = radius;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = utils.parseColor(color);
    this.linewidth = 1;
}

Ball.prototype.draw = function (context){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX,this.scaleY);
    context.linewidth = this.linewidth;
    context.beginPath();
    //x,y,radius,startangle,end_angle,anti-clockwise
    context.arc(0,0,this.radius,0,(Math.PI*2),true);
    context.closePath();
    context.fill();
    if (this.linewidth > 0){
        context.stroke();
        }
    context.restore();
};

Ball.prototype.getBounds = function(){
    return{
        x:this.x - this.radius,
        y:this.y - this.radius,
        width:this.radius*2,
        height:this.radius*2
    }
}

utils.containsPoint = function(rect,x,y){
    return !(x < rect.x||x>rect.x+rect.width||
            y < rect.y||y>rect.y+rect.height)
}
