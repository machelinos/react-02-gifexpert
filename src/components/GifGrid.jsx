import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <h2>{ category }</h2>
            { isLoading && (<h3>Loading...</h3>) }

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
