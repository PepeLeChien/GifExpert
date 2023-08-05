import {getGifs} from '../../src/helpers/getGifs'

describe('test in getGifs', () => {

    test('should return an array with gifs with its properties', async() => {

        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            title: expect.any(String),
            url: expect.any(String),
            id: expect.any(String)
        })

    })

    
})