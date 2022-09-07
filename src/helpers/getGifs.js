import { getEnvVariables } from "./getEnvVariables";

export const getGifs = async (category) => {

    const { VITE_GIPHY_API_KEY } = getEnvVariables();

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_GIPHY_API_KEY}&q=${category}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((gif)=>({
        id: gif.id,
        title: gif.title,
        imgUrl: gif.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
}
