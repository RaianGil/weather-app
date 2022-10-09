import React from "react";
import { render } from '@testing-library/react';
import ForecastItem from './ForecastItem';

const hour = 10;
const state = "snow";
const temperature = 70;
const weekDay = "Martes"
test("ForecastItem render", async () => {
    const { getByText } = render(
        <ForecastItem 
            hour={hour} 
            state={state} 
            temperature={temperature} 
            weekDay={weekDay} />);

    const compHour = getByText(`${hour}`);
    const compTemperature = getByText(`${temperature}`);
    const compWeekDay = getByText(weekDay);

    expect(compHour.textContent).toBe(`${hour}`);
    expect(compTemperature.textContent).toBe(`${temperature}`);
    expect(compWeekDay.textContent).toBe(weekDay);
})