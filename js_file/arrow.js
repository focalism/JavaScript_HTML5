function Arrow(){
    this.x = 0;
    this.y = 0;
    this.color = '#ffff00';
    this.rotation = 0;
}

Arrow.prototype.draw = function(context){
    context.save();
    //保存当前画布的状态
    context.translate(this.x,this.y);
    //每次将箭头的中心置于画布的中心
    context.rotate(this.rotation);
    //旋转的弧度
    context.lineWidth = 2;
    context.fillStyle = this.color;
    context.beginPath();
    //开启画路径
    context.moveTo(-50,-25);
    //开始画线的初始位置
    context.lineTo(0,-25);//画线结束点的位置
    context.lineTo(0,-50);//关闭画路径
    context.lineTo(50,0);
    context.lineTo(0,50);
    context.lineTo(0,25);
    context.lineTo(-50,25);
    context.lineTo(-50,-25);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();//返回之前保存的画布路径状态，与save()成对用
}
