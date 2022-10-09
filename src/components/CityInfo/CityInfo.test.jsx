import React from 'react';
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'; //SUT: Subject under testing (objeto del testeo)

test("CityInfo render", async () => {
    // AAA
    // Arrange
    // Act
    const city = "Santo Domingo";
    const country = "Republica Dominicana";
    
    // Render: renderiza el componente y retorna una serie de funciones de utilidad
    // En este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
    // Camos a analizar su estado en el "Assert"
    const { findAllByRole } = render(<CityInfo city={city} country={country} />);

    // Assert
    // findAllByRole nos va a buscar (en este caso) todos los componentes que sean
    // "heading" => H1,H2,H3,H4,H5,H6
    // El resultado es un array de componentes (cityAndCountryComponets);
    const cityAndCountryComponets = await findAllByRole("heading");

    // Cuando el test va a ser correcto?
    // Definicion:
    // Cuando el primer elemento (heading) se encuentre la ciudad de "Santo Domingo"
    // y cuando el segundo elemento se encuentre el pais de Argentina

    expect(cityAndCountryComponets[0].textContent).toBe(`${city}, `);
    expect(cityAndCountryComponets[1].textContent).toBe(country);
})