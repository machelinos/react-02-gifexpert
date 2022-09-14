import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests for <GifGrid />', ()=>{
    test('on init component should render loading ..', ()=>{
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })
        const category = 'Wicked';
        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...')).toBeTruthy();
    });

    test('on fetched images shoul print a list of gifs', ()=>{
        useFetchGifs.mockReturnValue({
            gifs: [
                {
                    id: 'ABC',
                    imgUrl: 'https://localhost/whatever.jpg',
                    title: 'Whatever'
                },
                {
                    id: '123',
                    imgUrl: 'https://localhost/yo.jpg',
                    title: 'Yooo'
                }

            ],
            isLoading: false
        })
        const category = 'Wicked';
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})