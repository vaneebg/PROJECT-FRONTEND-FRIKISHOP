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


import { UserProvider } from './context/UserContext/UserState';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import { OrdersProvider } from './context/OrderContext/OrderState';
import { ReviewsProvider } from './context/ReviewsContext/ReviewsState';
import AddProduct from './components/Products/AddProduct/AddProduct';
import EditProduct from './components/Products/EditProduct/EditProduct';

import 'antd/dist/antd.css'
import { CategoriesProvider } from './context/CategoriesContext/CategoriesState';
import Categories from './components/Categories/Categories';



const links=['Información','Blog','Empleo','Ayuda','API','Privacidad','Condiciones','Cuentas destacadas','Hashtags','Ubicaciones', 'Saber más', 'Cosis1','Cosis2']

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
        <ProductsProvider>
          <OrdersProvider>
            <ReviewsProvider>
          <Header/>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path='/' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/categories' element ={<Categories/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/favs" element={<Favs/>} />
            <Route path='/admin' element ={<Admin/>}/>
            <Route path="/product/id/:id" element={<AddProduct/>} />
            <Route path="/products/id/:id" element={<EditProduct/>} />
          </Routes>
          <Footer info='Hecho por Shan y Vanesa ' copy='Junio 2022 ©' links={links}/>
          </ReviewsProvider>
          </OrdersProvider>
        </ProductsProvider>
        </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;