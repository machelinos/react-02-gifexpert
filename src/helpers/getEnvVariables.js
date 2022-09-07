export const getEnvVariables = () => {
    // import.meta.env;

    return {
        VITE_GIPHY_API_KEY: import.meta.env.VITE_GIPHY_API_KEY,
    }

}