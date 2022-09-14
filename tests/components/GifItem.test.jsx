import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', ()=>{
    const title="Image title";
    const id = "123456";
    const imgUrl = "https://title.com/imahe.jpg";

    test('debe hacer match con el snapshot', ()=>{
        const {container} = render(<GifItem title={title} id={id} imgUrl={imgUrl} />);
        expect(container).toMatchSnapshot();
    });

    test('image src and alt text must match', ()=>{
        render(<GifItem title={title} id={id} imgUrl={imgUrl} />);
        // screen.debug();
        const {src, alt } = screen.getByRole('img');
        expect(src).toBe(imgUrl);
        expect(alt).toBe(title);
    });

    test('test title should be present in the component rendered',()=>{
        render(<GifItem title={title} id={id} imgUrl={imgUrl} />);
        const text = screen.getByText(title);
        expect(text).toBeTruthy();
    });
})