//Define an object that represents a car(Honda civic)
//Write a function that uses the car object
var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: " + this.name + ", Year: " + this.year + ", Broken? " + this.broken;
    }
};
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
