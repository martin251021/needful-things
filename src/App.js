import './App.css';
import React from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './pages/Main';
import CartPage from './pages/CartPage';
import SingleProduct from './pages/SingleProduct';
import Category from './pages/Category';


function App() {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  

  React.useEffect(() => {
    const fetchData = async function() {
      setError(false);
      setLoading(true);
      try {
        const response = await axios("https://fakestoreapi.com/products")
        setData(response.data)
        setLoading(false)
      } catch(err) {
        console.log(err)
        setError(true)
      }
    }
    fetchData()
    
  }, [])


  return (
    <div className="main">
      <BrowserRouter>
        <div className='header'>
          <Header />
        </div>
        <div className='main-container'>
            <Navbar />
            <div className="main-content">
              <Routes>
                <Route index element={<Main />} />
                <Route path="/categories/:category/:id" element={<SingleProduct />} />
                <Route path="/categories/:category" element={<Category />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;