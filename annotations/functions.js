//Inference on Functions
var add = function (a, b) {
    return a + b;
};
var logger = function (message) {
    console.log(message);
};
var forecast = {
    date: new Date(),
    weather: 'Sunny'
};
var logWeather = function (forecast) {
    console.log(forecast.date);
    console.log(forecast.weather);
};
logWeather(forecast);
