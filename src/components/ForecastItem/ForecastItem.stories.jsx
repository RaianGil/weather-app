import React from 'react';
import ForecastItem from './ForecastItem';

export default {
    title: "ForecastItem",
    component: ForecastItem
}

export const LunesSoleado = () => <ForecastItem hour={12} weekDay="Lunes" temperature={25} state="clear" />