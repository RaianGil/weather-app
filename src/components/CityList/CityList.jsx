import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import convertUnits from 'convert-units';
import Grid from '@material-ui/core/Grid';
import List  from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CityInfo from '../CityInfo';
import Weather from '../Weather';

const getCityCode = (city, countryCode) => `${city}-${countryCode}`;
// renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
  const { city, country, countryCode } = cityAndCountry;
  //const { temperature, state } = weather;
  return (
    <ListItem 
      button
      key={getCityCode(city, countryCode)} 
      onClick={eventOnClickCity}>
      <Grid container
        justifyContent='center'
        alignItems='center' >

        <Grid item
          md={9}
          xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>

        <Grid item
          md={3}
          xs={12}>
          <Weather 
            temperature={weather && weather.temperature} 
            state={weather && weather.state} />
        </Grid>

      </Grid>
    </ListItem>
  )
}

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({})
  const [error, SetError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const apiKey = "7ebbdf4b87539b129c1289c23f3371f3";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`
      try {
        const response = await axios.get(url)
        const { data } = response
        const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0));
        const state = data.weather[0].main.toLowerCase();

        const propName = getCityCode(city, countryCode);
        const propValue = {  temperature, state }

        setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue}))
      }
      catch (error){
        if (error.response) { // 1- Error que nos responde el server
          const { data, status } = error.response
          SetError("Ha ocurrido un error en el servidor del clima");
        }
        else if (error.request) { // 2- Error que suceden por no llegar al server
          SetError("");
        }
        else { // 3- Errores imprevistos
          SetError("Error al cargar los datos");
        }
      }
    }
    cities.forEach(({ city, countryCode }) => {
      setWeather(city, countryCode);
    });
  }, [cities])

  return (
    <div className="">
      {
        error && <Alert onClose={()=> SetError(null)} severity='error'>{error}</Alert>
      }
      <List>
        {
          cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
        }
      </List>
    </div>

  )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired,
      })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList