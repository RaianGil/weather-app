import React from "react";
import { render } from '@testing-library/react';
import Forecast from './Forecast';

const foreList = [
    {hour: 15, temperature: 70, state: "snow", weekDay: "Lunes"},
    {hour: 36, temperature: 60, state: "snow", weekDay: "Domingo"},
    {hour: 45, temperature: 86, state: "snow", weekDay: "Martes"},
]
test("Forecast render que me invente", async () => {
    const { getByText } = render(<Forecast forecastItemList={foreList} />);
    foreList.map(forecast => {
        const itemWeekDay = getByText(forecast.weekDay);
        const itemHour = getByText(`${forecast.hour}`);
        const itemTemperature = getByText(`${forecast.temperature}`);

        expect(itemWeekDay.textContent).toBe(forecast.weekDay);
        expect(itemHour.textContent).toBe(`${forecast.hour}`);
        expect(itemTemperature.textContent).toBe(`${forecast.temperature}`);
    })
})

test("Forecast render Nuevo", async () => {
    // Como encontrar los items?
    // findAllByTestId nos va a permitir encontrar cada item con esa marca
    const { findAllByTestId } = render(<Forecast forecastItemList={foreList} />)
    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(foreList.length)
})