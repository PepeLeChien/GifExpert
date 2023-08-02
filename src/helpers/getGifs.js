export const getGifs = async (category) => {

    const apiKey = `X9vSZrViSAwnpcBUU4Akmb2S3oNVN2Og`;
    const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

    const resp = await fetch(urlApi);
    const {data} = await resp.json();

    const gifs = data.map( data => {
        return {
            id: data.id,
            title: data.title,
            url: data.images.downsized_medium.url
        }
    } )
    console.log(gifs);

    return gifs;

}