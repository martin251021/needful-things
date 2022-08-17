import './App.css';
import React, {useEffect} from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './pages/Main';
import CartPage from './pages/CartPage';
import SingleProduct from './pages/SingleProduct';
import Category from './pages/Category';
import SearchResults from './pages/SearchResults';
import { AppProvider } from "./context/AppContext";
import OrderFinish from './pages/OrderFinish';
import OrderSent from './pages/OrderSent';


export const AppContext = React.createContext()

function App() {

  return (
    <AppProvider>
      <div className="main">
        <BrowserRouter>
          <div className='header'>
            <Header />
          </div>
          <div className='main-container'>
              <Navbar />
                <Routes>
                  <Route index element={<Main />} />
                  {/* <Route path="/categories/:category/:id" element={<SingleProduct />} /> */}
                  <Route path="/categories/:category" element={<Category />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/cart/:id" element={<SingleProduct />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/search/:id" element={<SingleProduct />} />
                  <Route path="/order" element={<OrderFinish />} />
                  <Route path="/order/:id" element={<SingleProduct />} />
                  <Route path="/ordered" element={<OrderSent />} />
                </Routes>
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;