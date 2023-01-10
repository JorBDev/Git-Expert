export const getGifs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=zawIfoWZB0ChD2egHWtWO2DKqm0jwaDS&limit=10&q=${category}`
        const resp = await fetch(url);
        const { data = [] } = await resp.json();

        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        return gifs;

    } catch (error) {
        console.error(error);
        return [];
    }
}
