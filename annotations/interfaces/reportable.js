var newCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: " + this.name + ", Year: " + this.year + ", Broken? " + this.broken;
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(newCivic);
