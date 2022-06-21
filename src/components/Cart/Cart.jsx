import { useContext,useEffect } from "react"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"

const Cart = () => {

    const { cart } = useContext(ProductsContext)

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    if(cart.length<=0){
        return <span>No tienes ningun producto añadido</span>
    }

    const cartItem = cart.map((cartItem,i)=>{
        return(
            <div key={i}>
                <span>{cartItem.name}</span>
                <span>{cartItem.price.toFixed(2)} €</span>
            </div>
        )
    })

  return (
    <div>{cartItem}</div>
  )
}

export default Cart