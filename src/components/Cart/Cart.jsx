import './Cart.scss'
import gif from '../../assets/gif.gif'
import { useContext,useEffect } from "react"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import { OrdersContext } from "../../context/OrderContext/OrderState"
import { notification} from 'antd'


const Cart = () => {

    const { cart,clearCart,clearOne } = useContext(ProductsContext)
    const {createOrder}=useContext(OrdersContext)

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    if(cart.length<=0){
        return <div className='nomoney'>  <span className='messagecar'>No tienes ningún producto añadido, es hora de gastar 💰💰</span><img className='imgcat' src={gif} alt="" /></div>
    }

    const createNewOrder=()=>{
        createOrder(cart)
        clearCart()
        return notification.success({
            message: "Yeah!",
            description: "Pedido hecho",
          });
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
        const sumDec=sum.toFixed(2)


    return (
    <div className="center">
    <div className='cart'><h2>Carrito: </h2>{cartItem}
    <span>Total: {sumDec} €</span>
    <button onClick={()=>clearCart()}>Vaciar carrito</button>
    <button onClick={()=>createNewOrder()}>Crear pedido</button>
    </div>
    </div>
  )
}

export default Cart