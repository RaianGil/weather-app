import React from "react";
import Weather from "./Weather";

export default {
    title: "Weather",
    components: Weather
}

export const WeatherClouds = () => <Weather temperature={10} state="clouds" />
export const WeatherClear = () => <Weather temperature={10} state="clear" />
export const WeatherRain = () => <Weather temperature={10} state="rain" />
export const WeatherSnow = () => <Weather temperature={10} state="snow" />
export const WeatherDrizzle = () => <Weather temperature={10} state="drizzle" />
export const WeatherThunderstorm = () => <Weather temperature={10} state="thunderstorm" />