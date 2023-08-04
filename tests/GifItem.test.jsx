import { render } from "@testing-library/react"
import { GifItem } from "../src/components/GifItem"

describe('tests on GifItem', () => {

    test('should match with snapshot', () => { 
        
        const {container} = render(<GifItem title="One Punch" url="https://blablabla.com"/>);

        expect(container).toMatchSnapshot();
    })
})