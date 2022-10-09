import React from 'react';
import { useHistory } from 'react-router-dom';
import CityList from '../components/CityList';
import AppFrame from "../components/AppFrame";
import Paper from "@material-ui/core/Paper"
const cities = [
  {city: 'Santo Domingo', country:'Republica Dominicana', countryCode: 'DO'},
  {city: 'Buenos Aires', country:'Argentina', countryCode: 'AR'},
  {city: 'Ciudad de Mexico', country:'Mexico', countryCode: 'MX'},
  {city: 'Maracaibo', country:'Venezuela', countryCode: 'VE'},
  {city: 'Bogota', country:'Colombia', countryCode: 'CO'},
  {city: 'Caracas', country:'Venezuela', countryCode: 'VE'}
];
const MainPage = props => {
  const history = useHistory();
  const onClickHandler = () => {
    // history.push permite alterar la URL por programacion
    history.push('/city')
  }
  return (
    <AppFrame>
      <Paper>
        <CityList cities={cities} onClickCity={onClickHandler}/>
      </Paper>
    </AppFrame>
  )
}


export default MainPage