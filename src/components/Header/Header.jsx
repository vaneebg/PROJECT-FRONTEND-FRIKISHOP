import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
    const { token, logout} = useContext(UserContext)

    const logoutUser = () =>{
        logout()
    }

  return (
    <nav className="nav">
   
    <div>
      {token ? (
        <>
          <span onClick={logoutUser}>
            <Link to="/">Logout</Link>
          </span>
          <span>
            <Link to="/profile">Profile</Link>
          </span>
          <span>
            <Link to="/products">Products</Link>
          </span>
         
          <span>
          <Link to="/cart"> <ShoppingCartOutlined /></Link>
            </span>

        </>
      ) : (
      <>
        <span>

          <Link to="/register">Register</Link>
        </span>
        <span>
          <Link to="/">Login</Link>
        </span>
        <span>
            <Link to='/products'>Products</Link>
          </span>
      </>
      )}
    </div>
  </nav>
  )
}

export default Header