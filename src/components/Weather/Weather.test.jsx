import React from "react";
import { render } from "@testing-library/react";
import Weather from './Weather';

test("Weather render", async() => {
    // AAA Arrange Act Assert
    const { findByRole } = render(<Weather temperature={10} state="snow" />);
    const temp =  await findByRole("heading");
    expect(temp.textContent).toBe("10");
})