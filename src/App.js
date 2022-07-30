import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './pages/Main';
import CartPage from './pages/CartPage';
import SingleProduct from './pages/SingleProduct';


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
        // console.log([...new Set(response.data.map(e => e.category))])
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
    <div className="App">
      <BrowserRouter>
        <div className='header'>
          <Header />
        </div>
        <div className='main-container'>
            <Navbar />
            <div className="main-content">
              <Routes>
                <Route index element={<Main />} />
                <Route path=":productId" element={<SingleProduct />} />
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