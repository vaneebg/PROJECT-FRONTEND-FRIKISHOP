import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"

const Cart = () => {

    const { cart } = useContext(ProductsContext)

    if(cart.length<=0){
        return <span>No tienes ningun producto añadido</span>
    }

    const cartItem = cart.map((cartItem,i)=>{
        return(
            <div>
                <span>{cartItem.name}</span>
                <span>{cartItem.price.toFixed()} €</span>
            </div>
        )
    })

  return (
    <div>{cartItem}</div>
  )
}

export default Cart