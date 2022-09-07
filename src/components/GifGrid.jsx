import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

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
    <div className="gifgrid">
        <h2>{ category }</h2>
        {
            gifs.map(({id, title})=>(
                <div
                    className="gif-item"
                    key={id}
                >
                    <h3>{ title }</h3>
                </div>
            ))
        }
    </div>
    )
}
