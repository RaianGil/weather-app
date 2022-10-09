import React from 'react';
import Forecast from './Forecast';

export default {
    title: 'Forecast',
    component: Forecast
}
const foreList = [
    {hour: 15, temperature: 70, state: "drizzle", weekDay: "Domingo"},
    {hour: 36, temperature: 45, state: "snow", weekDay: "Lunes"},
    {hour: 45, temperature: 86, state: "thunderstorm", weekDay: "Martes"},
]
export const ForecastExample = () => <Forecast forecastItemList={foreList} />