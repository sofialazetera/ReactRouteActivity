import React, { useState } from 'react'
import { Params, useParams } from 'react-router-dom'

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState([])
    const param = useParams();
    
    const getBeer = async()=>{
        //Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`https://api.punkapi.com/v2/beers/${param.id}`)
        const data = await res.json()
        setBeer(data[0])
    }

    useEffect(()=>{
        getBeer()
   }, [param])
    
  
  
  return (
    <div>
        <h2>Cerveza numero...</h2>
        <div className='card'>
            <img src={beer?.image_url} alt="beer-detail" />
            <p>{beer?.tagline}</p>
            <p>{beer?.description}</p>
            <p>{beer?.brewers_tips} </p>
        </div>
        <button>Go back</button>
    </div>

  )
}

export default Beer