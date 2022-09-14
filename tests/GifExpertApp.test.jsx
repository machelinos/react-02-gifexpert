import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Tests for <GifExpertApp />', ()=>{
    test('on entering category it should add a block for the category', ()=>{
        render(<GifExpertApp />);
        const text = "Hamilton";
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: text}});
        fireEvent.submit(form);
        expect(screen.getByText(text)).toBeTruthy();
    });

    test('on entering category already on list it should be only rendered one time', ()=>{
        render(<GifExpertApp />);
        const text = "Wicked";
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: text}});
        fireEvent.submit(form);
        expect(screen.getAllByText(text).length).toBe(1);

    })
});