import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';

import Products from './components/Products/Products';
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart';
import  Home  from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Favs from './components/Favs/Favs';
import Admin from './components/Admin/Admin';
import AddTask from './components/Products/AddProduct/AddProduct';


import { UserProvider } from './context/UserContext/UserState';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import 'antd/dist/antd.css'
import { OrdersProvider } from './context/OrderContext/OrderState';




const links=['Información','Blog','Empleo','Ayuda','API','Privacidad','Condiciones','Cuentas destacadas','Hashtags','Ubicaciones', 'Saber más', 'Cosis1','Cosis2']

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
            <Route path="/favs" element={<Favs/>} />
            <Route path='/admin' element ={<Admin/>}/>
            <Route path="/product/id/:id" element={<AddTask/>} />
          </Routes>
          <Footer info='Hecho por Shan y Vanesa ' copy='Junio 2022 ©' links={links}/>
          </OrdersProvider>
        </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;