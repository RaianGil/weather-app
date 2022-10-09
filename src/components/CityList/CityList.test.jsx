import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CityList from './CityList';

const fnClickOnItem = jest.fn()
const cities = [
    {city: 'Santo Domingo', country:'Republica Dominicana', countryCode: 'DO'},
    {city: 'Buenos Aires', country:'Argentina', countryCode: 'AR'},
    {city: 'Maracaibo', country:'Venezuela', countryCode: 'VE'}
];

test("CityList render", async () => {
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)
    const listItems = await findAllByRole("button");
    expect(listItems).toHaveLength(3);
})

test("CityList click on item", async () => {
    // Debemos simular una accion del usuario: click sobre un item
    // Para eso vamos a utilizar una funcion "mock"

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />);
    const item = await findAllByRole("button");
    // Ahora para simula la accion, vamos a utilizar un fireEvent
    // fireEvent es parte de la libreria testing-librery/react

    fireEvent.click(item[0])

    // Ahora que tuvo que suceder?
    // Se debio llama a la funcion fnClickOnItem UNA unica vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})