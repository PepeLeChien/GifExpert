import { fireEvent, render, screen } from "@testing-library/react"
import { GifSearchApp } from "../src/GifSearchApp"

describe('tests on GifSearchApp', () => {

    const inputValue = 'Goku';

    test('should add categories if onAddCategory is used', () => {

        render( <GifSearchApp/>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: { value: inputValue}});
        fireEvent.submit(form);

        expect(screen.getAllByText(inputValue).length).toBe(1);

    })

    test('should not add categories if the category already exists', () => {

        render( <GifSearchApp/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: { value: inputValue}});
        fireEvent.submit(form);

        fireEvent.input( input, {target: { value: inputValue}});
        fireEvent.submit(form);

        expect(screen.getAllByText(inputValue).length).toBe(1);
    })

})