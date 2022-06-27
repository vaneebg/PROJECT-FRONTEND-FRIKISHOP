import './Profile.scss'
import React from 'react'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { PoweroffOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom'
import { notification} from 'antd'
import { ProductsContext } from '../../context/ProductsContext/ProductsState';


const Profile = () => {
    const { getUserInfo,user,logout,role } = useContext(UserContext)
    const { clearCart,clearFavs} = useContext(ProductsContext)
    useEffect(()=>{
        getUserInfo()
    },[])
    const logoutUser = () =>{
      logout()
      clearFavs()
      clearCart()
      return notification.success({
        message: "Byee",
        description: "Hasta otra!!",
      });
  }
    if(!user){
        return <span>Cargando...</span>
    }
    const listOrders=user.Orders.map((order)=>order.Products.map((product,i)=>{return(<>
    <div className='orderc' key={i}>
    <span>Nombre del producto: {product.name}</span><br/>
    <span>Descripción:<br/> {product.description}</span><br/></div>
    <br />
    </>)}))
  return (
    <div className="center">
    <div className='profile'>
      <div className="header">
        <h1>Perfil</h1>  
        <span onClick={logoutUser}>
            <Link to="/"><PoweroffOutlined /></Link>
          </span>
          </div>
        <div className="contentInfo">
        <img src={"http://localhost:8080/images/users/"+user.img}/>
        <div className="text">
        <span>Tu nombre: {user.username}</span> <br />
        <span>Tu email: {user.email}</span><br />
        <span>Tu cueva: {user.adress}</span><br/>
        </div>
        </div>
        <div className="orders">
        { role==='SuperAdmin' ? <span className='hello'>👋 Aquí está el jefazo de nuevo 👋</span> : <span><div className="titleorder">Pedidos hechos:</div> <br/>{listOrders}</span>}
        </div>
        </div>
        </div>
  )
}

export default Profile