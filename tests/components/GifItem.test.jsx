import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('tests in GifItem', () => {
    
    const title = "Un puño";
    const url = "https://blablabla.com/saitama.jpg";

    test('should match with snapshot', () => { 
        
        const {container} = render(<GifItem title={title} url={url}/>);

        expect(container).toMatchSnapshot();
    })

    test('should match src and alt in img', () => {

        render(<GifItem title={ title } url={ url } />)
        
        const { src, alt } = screen.getByRole('img');
        
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('should exist the title in GifItem', () => {

        render(<GifItem title={title} url={url} />)

        expect(screen.getByText(title)).toBeTruthy();

    })


})