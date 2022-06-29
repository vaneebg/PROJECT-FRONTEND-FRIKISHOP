import './Favs.scss'

import { useContext, useEffect } from "react"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import gif2 from '../../assets/gif2.gif'

const Favs = () => {

    const { favs, clearFavs, clearOneFav } = useContext(ProductsContext)

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favs))
    }, [favs])

    if (favs.length <= 0) {
        return <div className='nomoney'>  <span className='messagecar'>No tienes ningún favorito añadido, hora de añadir alguno💛💛</span><img src={gif2} alt="" /></div>
    }
    const eliminarUno = (item) => {
        const items = JSON.parse(localStorage.getItem('favs'))
        let fav = items.filter((el) => el !== item)
        localStorage.setItem('cart', JSON.stringify(fav))
        clearOneFav(item)

    }

    const favsItem = favs.map((favsItem, i) => {

        return (
            <div className='productFav' key={i}>
                <span>{favsItem.name}</span>
                <span>{favsItem.price.toFixed(2)} €</span>
                <button onClick={() => eliminarUno(favsItem)}>Eliminar</button>
            </div>
        )
    })

    return (
        <div className="center">
            <div className='favs'><h2>Favoritos: </h2>{favsItem}
                <button onClick={() => clearFavs()}>Borrar favoritos</button>
            </div>
        </div>
    )
}

export default Favs