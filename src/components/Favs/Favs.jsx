import './Favs.scss'

import { useContext,useEffect } from "react"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"

const Favs = () => {

    const { favs,clearFavs } = useContext(ProductsContext)

    useEffect(()=>{
        localStorage.setItem('favs',JSON.stringify(favs))
    },[favs])

    if(favs.length<=0){
        return <span className='message'>No tienes ningún producto favorito añadido</span>
    }

  
    const favsItem = favs.map((favsItem,i)=>{
        
        return(
            <div className='productFav' key={i}>
                <span>{favsItem.name}</span>
                <span>{favsItem.price.toFixed(2)} €</span>
              
            </div>
        )
    })

  return (
    <div className="center">
    <div className='favs'><h2>Favoritos: </h2><br/>{favsItem}
    <button onClick={()=>clearFavs()}>Borrar favoritos</button>
    </div>
    </div>
  )
}

export default Favs