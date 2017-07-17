var Car = (function () {
    function Car() {
        var _this = this;
        this.dataArray = [];
        this.push = function (value1) { return _this.dataArray.push(value1); };
    }
    Car.prototype.displayArray = function () {
        var len = this.dataArray.length;
        for (var i = 0; i < len; i++) {
            console.log(this.dataArray[i]);
        }
    };
    return Car;
}());
var carObj = new Car();
carObj.push({ name: "Renault Duster" });
carObj.push({ price: 9 });