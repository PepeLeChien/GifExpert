import { getAllByRole, render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


jest.mock("../../src/hooks/useFetchGifs");


describe('tests on GifGird', () => {

    const category = 'One Punch';

    test('should show loading at first', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true, 
        })

        render( <GifGrid category={ category } /> );
        
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    })


    test('should show items when useFetchGifs is used', () => {

        const gifs = [
            {
                id: '123',
                title: 'Undertale',
                url: 'https:/games/undertale.jpg'
            },
            {
                id: 'ABC',
                title: 'Contra',
                url: 'https:/games/contra.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: false,
        })

        render( <GifGrid category={category} /> )
        expect(screen.getAllByRole('img').length).toBe(2);
    })


})