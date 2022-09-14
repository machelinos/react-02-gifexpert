import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('tests in <AddCategory />',()=>{
    test('input text value should change', ()=>{
        const text = 'Wicked';
        render(<AddCategory onAddCategory={()=>{}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: text}});
        expect(input.value).toBe(text);
    });
});