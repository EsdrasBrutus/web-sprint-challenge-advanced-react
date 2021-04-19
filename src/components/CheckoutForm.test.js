import React from "react";
import { getByAltText, render, screen, within } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />)
    const firstname = screen.getByLabelText(/first name/i);
    const lastname = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const submitBtn = screen.getByRole('button', /submit/i);
    

    userEvent.type(firstname, 'SpongeBob');
    userEvent.type(lastname, 'Squarepants');
    userEvent.type(address, '124 Conch Street');
    userEvent.type(city, 'Bikini Bottom');
    userEvent.type(state, 'Sea');
    userEvent.type(zip, '12345');

    userEvent.click(submitBtn);

    const successMessage = screen.getAllByTestId('successMessage')
    screen.debug(successMessage)

    const testName = screen.getByText('SpongeBob Squarepants')

    const testAddress = screen.getByText('124 Conch Street')

    const testLocation = screen.getByText('Bikini Bottom, Sea 12345')

    
    expect(testName).toBeInTheDocument();
    expect(testAddress).toBeInTheDocument();
    expect(testLocation).toBeInTheDocument();
    
});
