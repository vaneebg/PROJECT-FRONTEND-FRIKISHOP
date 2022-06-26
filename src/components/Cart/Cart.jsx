import './Cart.scss'

import { useContext,useEffect } from "react"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import { OrdersContext } from "../../context/OrderContext/OrderState"

const Cart = () => {

    const { cart,clearCart,clearOne } = useContext(ProductsContext)
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

    const eliminarUno=(item) =>{
        const items = JSON.parse(localStorage.getItem('cart'))
        let producto = items.filter((el)=> el!==item)
        localStorage.setItem('cart',JSON.stringify(producto))
        clearOne(item)
      
    }


    const cartItem = cart.map((cartItem,i)=>{
            return(
                <div className='productCart' key={i}>
                        <span>{cartItem.name}</span>
                        <span>{cartItem.price.toFixed(2)} €</span>
                        <button onClick={()=>eliminarUno(cartItem)}>Eliminar</button>
                </div>
            )
    })
    
        const price= cart.map(el=>el.price)
        const sum = price.reduce((a,b)=> a + b)


    return (
    <div className="center">
    <div className='cart'><h2>Carrito: </h2><br/>{cartItem}
    <span>Total: {sum} €</span>
    <button onClick={()=>clearCart()}>Vaciar carrito</button>
    <button onClick={()=>createNewOrder()}>Crear pedido</button>
    </div>
    </div>
  )
}

export default Cart