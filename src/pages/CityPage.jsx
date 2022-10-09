import { Grid } from '@material-ui/core';
import React from 'react'
import CityInfo from '../components/CityInfo';
import ForecastChart from '../components/ForecastChart';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import Forecast from '../components/Forecast';
import AppFrame from "../components/AppFrame";

const CityPage = () => {
  const city = "Santo Domingo";
  const country = "Republica Dominicana";
  const state = "thunderstorm";
  const temperature = 35;
  const humidity = 25;
  const wind = 14;
  const data = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]
  const forecastItemList = [
    {hour: 15, temperature: 70, state: "snow", weekDay: "Domingo"},
    {hour: 36, temperature: 45, state: "drizzle", weekDay: "Lunes"},
    {hour: 45, temperature: 86, state: "thunderstorm", weekDay: "Martes"},
]

  return (
    <AppFrame>
      <Grid item
        spacing={2}>
          <Grid item container xs={12}
            justifyContent="center"
            alignItems='flex-end'>
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid container item xs={12}
            justifyContent="center">
              <Weather state={state} temperature={temperature} />
              <WeatherDetails humidity={humidity} wind={wind} />
          </Grid>
          <Grid item>
            <ForecastChart data={data} />
          </Grid>
          <Grid item>
            <Forecast forecastItemList={forecastItemList} />
          </Grid>
      </Grid>
    </AppFrame>
  )
}

export default CityPage