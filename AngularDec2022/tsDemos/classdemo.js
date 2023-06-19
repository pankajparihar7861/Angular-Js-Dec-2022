var pi = 3.14;
var circle = /** @class */ (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.getArea = function () {
        return pi * this.radius * this.radius;
    };
    return circle;
}());
var obj = new circle(3.2);
console.log('the area is ' + obj.getArea());
