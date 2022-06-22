import './Profile.scss'
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
    <div className="center">
    <div className='profile'>
        <h1>Perfil</h1>  
        <div className="contentInfo">
        <img src={"http://localhost:8080/images/users/"+user.img}/>
        <div className="text">
        <span>Tu nombre: {user.username}</span> <br />
        <span>Tu email: {user.email}</span><br />
        <span>Tu cueva: {user.adress}</span><br/>
        </div>
        </div>
        <div className="orders">
        <span><div className="titleorder">Pedidos hechos:</div> <br/>{listOrders}</span>
        </div>
        </div>
        </div>
  )
}

export default Profile