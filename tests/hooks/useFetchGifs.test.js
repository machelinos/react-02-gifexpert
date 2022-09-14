import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Tests in custom hook useFetchGifs', ()=>{
    test('Should load the initial state images: [], isLoading: true', ()=>{
        const { result } = renderHook(()=>useFetchGifs('Wicked'));
        const { gifs, isLoading } = result.current;
        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Should load the images and isLoading false', async ()=>{
        const { result } = renderHook(()=>useFetchGifs('Wicked'));

        await waitFor(()=>{
            expect(result.current.gifs.length).toBeGreaterThan(0);
        });

        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });
});