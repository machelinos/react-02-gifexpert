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

    test('on submit form should execute onAddCategory function', ()=>{
        const text = 'Wicked';
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: text}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(text);
    });

    test('on submit form with no input value, onAddCategory should not be executed',()=>{
        const text = '';
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: text}});
        fireEvent.submit(form);
        expect(onAddCategory).toBeCalledTimes(0);
        expect(onAddCategory).not.toHaveBeenCalled();
    });

});