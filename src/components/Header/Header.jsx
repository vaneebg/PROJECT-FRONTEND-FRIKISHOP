import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { ShoppingCartOutlined, LikeOutlined } from "@ant-design/icons";
import { useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Badge } from 'antd';


const Header = () => {
  const { token, role } = useContext(UserContext)
  const { cart, favs } = useContext(ProductsContext)



  return (
    <nav className="nav">

      <div>
        {token ? (

          <>
            {role === 'SuperAdmin' ? (<>
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
                  <Link to="/">Home</Link>
                </span>

                <span>
                  <Link to="/profile">Perfil</Link>
                </span>

                <span>
                  <Link to="/products">Productos</Link>
                </span>
                <div className="iconssC">
                  <Badge style={{
                    backgroundColor: 'green',
                  }}
                    count={favs.length} showZero>
                    <Link className='iconss' to="/favs"><LikeOutlined /></Link>
                  </Badge>
                </div>
                <div className="iconssC">

                  <Badge style={{
                    backgroundColor: 'green',
                  }}
                    count={cart.length} showZero>
                    <Link className='iconss' to="/cart"> <ShoppingCartOutlined /></Link>
                  </Badge>
                </div>



              </>)}
          </>
        ) : (
          <>
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>
              <Link to="/register">Registrarse</Link>
            </span>
            <span>
              <Link to="/login">Login</Link>
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