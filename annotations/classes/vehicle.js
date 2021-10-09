var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
        this.color = color;
    }
    // public drive(): void {
    //     console.log('drive drive');
    // }
    Vehicle.prototype.honk = function () {
        console.log('beep beep');
    };
    Vehicle.prototype.startHonk = function () {
        console.log(this.color);
        this.honk();
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color) {
        return _super.call(this, color) || this;
    }
    Car.prototype.drive = function () {
        //console.log(this.color);
        console.log('vroom');
    };
    return Car;
}(Vehicle));
var v = new Vehicle('orange');
v.startHonk();
var vehicle = new Car('blue');
vehicle.startHonk();
//vehicle.drive();
