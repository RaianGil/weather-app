import React from "react";
import CityList from "./CityList";
import { action } from '@storybook/addon-actions';

export default {
    title: "CityList",
    component: CityList
};
const cities = [
    {city: 'Santo Domingo', country:'Republica Dominicana', state: 'cloudy', temperature: 25},
    {city: 'Buenos Aires', country:'Argentina', state: 'fog', temperature: 28},
    {city: 'Abuya', country:'Nigeria', state: 'rain', temperature: 46}
];

export const CityListExample = () => <CityList cities={cities} onClickCity={action("click en City")} />