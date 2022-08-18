import React from 'react'

interface Props{
    title:string,
    url:string,
    id:string
}

export const GifGridItem = ( {title, url, id}:Props) => {
  return (
    <div className="card">
        <img src={url} alt="" />
        <p>{title}</p>

    </div>
  )
}

