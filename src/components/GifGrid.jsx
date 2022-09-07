import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([]);

    const getImages = async () => {
        const gifs = await getGifs(category);
        setGifs(gifs);
    }

    useEffect(()=>{
        getImages();
    }, []);

    return (
        <>
            <h2>{ category }</h2>

            <div className="card-grid">
                {
                    gifs.map((gif)=>(
                        <GifItem
                            key={gif.id}
                            {...gif}
                        />
                    ))
                }
            </div>
        
        </>
    )
}
