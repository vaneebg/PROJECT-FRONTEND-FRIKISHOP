import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products/Products';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/products" element={<Products />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;