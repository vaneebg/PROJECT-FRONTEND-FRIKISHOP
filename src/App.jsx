import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';

import Products from './components/Products/Products';
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart';
import  Home  from './components/Home/Home';

import { UserProvider } from './context/UserContext/UserState';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import 'antd/dist/antd.css'
import { OrdersProvider } from './context/OrderContext/OrderState';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <UserProvider>
        <ProductsProvider>
          <OrdersProvider>
          <Header/>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path='/' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </OrdersProvider>
        </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;