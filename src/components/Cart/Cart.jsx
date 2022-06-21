import { useContext,useEffect } from "react"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import { OrdersContext } from "../../context/OrderContext/OrderState"

const Cart = () => {

    const { cart,clearCart } = useContext(ProductsContext)
    const {createOrder}=useContext(OrdersContext)

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    if(cart.length<=0){
        return <span>No tienes ningún producto añadido</span>
    }

    const createNewOrder=()=>{
        createOrder(cart)
        clearCart()
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
    <>
    <div>{cartItem}</div>
    <button onClick={()=>clearCart()}>Vaciar carrito</button>
    <button onClick={()=>createNewOrder()}>Crear pedido</button>
    </>
  )
}

export default Cart