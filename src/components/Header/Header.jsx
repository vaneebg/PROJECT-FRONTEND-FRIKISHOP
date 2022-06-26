import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { ShoppingCartOutlined,LikeOutlined } from "@ant-design/icons";
import { useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'

const Header = () => {
    const { token, role} = useContext(UserContext)
    const {cart,favs}=useContext(ProductsContext)



  return (
    <nav className="nav">
   
    <div>
      {token ? ( 
        
        <>
         { role==='SuperAdmin' ? (<> 
          <span>
            <Link to="/admin">Admin</Link>
          </span>
        
          <span>
            <Link to="/profile">Perfil</Link>
          </span>
          <span>
            <Link to="/products">Productos</Link>
          </span>
          </>
          ) : 
          (<>
           <span>
            <Link to="/home">Home</Link>
          </span>
         
          <span>
            <Link to="/profile">Perfil</Link>
          </span>
          <span>
            <Link to="/products">Productos</Link>
          </span>
          <span>
          <Link to="/favs"><LikeOutlined /><div className="iconlike"><span>{favs.length}</span></div></Link>
            </span>
          <span>
          <Link to="/cart"> <ShoppingCartOutlined /><div className="iconcart"><span>{cart.length}</span></div></Link>
            </span>
            </>)}
        </>
      ) : (
      <>
       <span>
            <Link to="/home">Home</Link>
          </span>
        <span>
          <Link to="/register">Registrarse</Link>
        </span>
        <span>
          <Link to="/">Login</Link>
        </span>
        <span>
            <Link to='/products'>Productos</Link>
          </span>
      </>
      )}
    </div>
  </nav>
  )
}

export default Header