import { getGifs } from "../../src/helpers/getGifs";

describe('tests in helper getGifs', ()=>{
    test('getGifs should return a gifs array', async ()=>{
        const gifs = await getGifs('Wicked');
        expect(gifs.length > 0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            imgUrl: expect.any(String)
        })
    })
});