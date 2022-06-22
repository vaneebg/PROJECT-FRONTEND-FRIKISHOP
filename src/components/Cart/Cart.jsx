<<<<<<< HEAD

=======
import './Cart.scss'
>>>>>>> develop

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
        return <span className='message'>No tienes ningún producto añadido</span>
    }

    const createNewOrder=()=>{
        createOrder(cart)
        clearCart()
    }





    const cartItem = cart.map((cartItem,i)=>{
        
        return(
            <div className='productCart' key={i}>
<<<<<<< HEAD
                {cartItem?
                    <div>
=======
>>>>>>> develop
                <span>{cartItem.name}</span>
                <span>{cartItem.price.toFixed(2)} €</span>
                <button onClick={() =>{
                    const items = JSON.parse(localStorage.getItem('cart'))
                    // console.log('!!!!!!!!',items[i])
                    let a = items.filter((el)=>{return el!==items[i]})
                    // console.log('aaaaaaaaaaa',a)
                    localStorage.setItem('cart',JSON.stringify(a))
                }}>Eliminar</button>
                </div>:null}
                
                
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