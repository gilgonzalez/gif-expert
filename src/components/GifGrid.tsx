import useFetchGifs from '../hooks/useFetchGifs'
import {GifGridItem} from './'

interface GridComponent{
    key: string, 
    category: string
}

//WmcuXZ3Xfuapdm0tLmvrMgAfIdaaqbl9

export const GifGrid = ({category}:GridComponent) => {

    const {images, isLoading} = useFetchGifs(category);
   /*  
    TODO ESTO SE HA TRASPASADO A UN HOOK PERSONALIZADO USEFETCHGIFS
    const [images, setImages] = useState<Image[]>()

    const getImages = async()=>{
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect(() => {
        getImages()
    }, []) */
    
  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<div className="lds-circle"><div></div></div>)
        }
        
            <div className= "card-grid">
                {
                    images?.map(image=>(
                        <GifGridItem key={image.id} {...image}/>
                    ))
                }
            </div>
    </>
           
  )
}
