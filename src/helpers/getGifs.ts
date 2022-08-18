
export const getGifs = async (category:string)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WmcuXZ3Xfuapdm0tLmvrMgAfIdaaqbl9&q=${category}&limit=5`;
    const res = await fetch(url)

    const {data} = await res.json()

    const gifs = data.map( (img: {
        images: any; id: string; title: string; downsized_medium: { url: string; }; }) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs

}