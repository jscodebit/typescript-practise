//Inference on Functions
const add = (a: number, b: number): number => {
    return a + b;
}

const logger = (message: string): void => {
    console.log(message);
}

const forecast = {
    date: new Date(),
    weather: 'Sunny'
}

const logWeather = (forecast: { date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

logWeather(forecast);