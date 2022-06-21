import './Cart.scss'

import { useContext,useEffect } from "react"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import { OrdersContext } from "../../context/OrderContext/OrderState"

const Cart = () => {

    const { cart,clearCart,deleteItem } = useContext(ProductsContext)
    const {createOrder}=useContext(OrdersContext)

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    if(cart.length<=0){
        return <span className='message'>No tienes ningún producto añadido</span>
    }

    const createNewOrder=()=>{
        createOrder(cart)
        clearCart()
    }

    // const products =()=>{
        
    // }

    const cartItem = cart.map((cartItem,i)=>{
        console.log(cartItem)
        return(
            <div className='productCart' key={i}>
                <span>{cartItem.name}</span>
                <span>{cartItem.price.toFixed(2)} €</span>
                <button onClick={()=>deleteItem(cartItem.id)}>Eliminar</button>
            </div>
        )
    })

  return (
    <div className="center">
    <div className='cart'><h2>Carrito: </h2><br/>{cartItem}
    <button onClick={()=>clearCart()}>Vaciar carrito</button>
    <button onClick={()=>createNewOrder()}>Crear pedido</button>
    </div>
    </div>
  )
}

export default Cart