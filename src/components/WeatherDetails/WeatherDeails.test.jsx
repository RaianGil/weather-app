import React from "react";
import { render } from '@testing-library/react';
import WeatherDetails from './WeatherDetails';
const wind = 50;
const humedity = 10;
test("WeatherDetails render", async () => {
    const { findByText } = render(<WeatherDetails wind={wind} humidity={humedity}/>);
    const compWind = await findByText(/50/);
    const compHumedity = await findByText(/10/);
    expect(compHumedity.textContent).toBe(`Humedad: ${humedity}%`);
    expect(compWind.textContent).toBe(`Viento: ${wind} km/h`);
})