import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"

describe('Tests for <GifGrid />', ()=>{
    test('on init component should render loading ..', ()=>{
        const category = 'Wicked';
        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...')).toBeTruthy();
    })
})