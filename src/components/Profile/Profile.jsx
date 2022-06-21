import React from 'react'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'

const Profile = () => {
    const { getUserInfo,user } = useContext(UserContext)
    useEffect(()=>{
        getUserInfo()
    },[])

    if(!user){
        return <span>Cargando...</span>
    }
    const listOrders=user.Orders.map(order=>order.Products.map(product=>{return(<>
    <span>Nombre del producto: {product.name}</span><br/>
    <span>Descripción: {product.description}</span><br/></>)}))

  return (
    <div>
        <h1>Profile</h1>  
        <span>Tu nombre: {user.username}</span> <br />
        <span>Tu email: {user.email}</span><br />
        <span>Tu cueva: {user.adress}</span><br/>
        <span>Pedidos: <br/>{listOrders}</span>
        </div>
  )
}

export default Profile