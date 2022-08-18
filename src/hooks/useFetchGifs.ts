import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

interface Image {
    images: any,
    id: string, 
    title: string,
    url:string, 
    downsized_medium: 
    { url: string } }
const useFetchGifs = (category:string) => {

    const [images, setImages] = useState<Image[]>()
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(()=>{
        console.log('esperando..')
    },5000)

    const getImages = async()=>{
        const newImages = await getGifs(category)
        
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        images:images,
        isLoading: isLoading
        // si el nombre del atributo es igual que su asignación se puede quitar la asignación
    }
}

export default useFetchGifs