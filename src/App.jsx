import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';

import Products from './components/Products/Products';
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart';

import { UserProvider } from './context/UserContext/UserState';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import 'antd/dist/antd.css'



function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <ProductsProvider>
        <UserProvider>
          <Header/>
        <Routes>
            <Route path="/products" element={<Products />} />
            <Route path='/' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </UserProvider>
        </ProductsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;