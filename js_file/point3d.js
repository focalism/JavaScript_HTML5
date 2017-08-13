function Point3d(x,y,z){
    this.x = (x === undefined)?0:x;
    this.y = (y === undefined)?0:y;
    this.z = (z === undefined)?0:z;
    this.f1 = 250;
    this.vpx = 0;
    this.vpy = 0;
    this.cx = 0;
    this.cy = 0;
    this.cz = 0;
}

Point3d.prototype.setVanishingPoint = function(vpx,vpy){
    this.vpx = vpx;
    this.vpy = vpy;
};

Point3d.prototype.setCenter = function(cx,cy,cz){
    this.cx = cx;
    this.cy = cy;
    this.cz = cz;
};

Point3d.prototype.rotateX = function(angleX){
    var cosx = Math.cos(angleX),
        sinx = Math.sin(angleX),
        y1 = this.y * cosx - this.z *sinx;
        z1 = this.z * cosx + this.y *sinx;
    this.y = y1;
    this.z = z1;
};

Point3d.prototype.rotateY = function(angleY){
    var cosy = Math.cos(angleY),
        siny = Math.sin(angleY),
        x1 = this.x * cosy - this.z *siny,
        z1 = this.z * cosy + this.x *siny;
    this.x = x1;
    this.z = z1;
}

Point3d.prototype.rotateZ = function(angleZ){
    var cosz = Math.cos(angleZ),
        sinz = Math.sin(angleZ),
        x1 = this.x * cosz - this.y * sinz
        y1 = this.y * cosz + this.x * sinz;
    this.x = x1;
    this.y = y1;
}

Point3d.prototype.getScreenX = function(){
    var scale = this.f1/(this.f1 + this.z + this.cz);
    return this.vpx + (this.cx + this.x)*scale;
};

Point3d.prototype.getScreenY = function(){
    var scale = this.f1/(this.f1+ this.z + this.cz);
    return this.vpy + (this.cy+ this.y)*scale;
};