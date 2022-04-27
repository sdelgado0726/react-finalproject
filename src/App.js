import React from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import ProductHome from './ProductHome';
import ProductForm from './ProductForm';
import About from './About';
import ProductList from './ProductList';
import {Navbar, Nav, Container} from 'react-bootstrap'
import ProductDetail from './ProductDetail';
import './App.css';
import logo from './assets/logo.png'




function App() {
  return (
    <BrowserRouter>
      <Navbar className='Navbar'>
        <Navbar.Brand className='logo'>
          <img
            alt=""
            src={logo}
            width="45"
            height="45"
            style={{padding: "5px"}}
            // className="d-inline-block align-top"
          />{' '}
        Purple Mango 
        </Navbar.Brand>
          <Container className="justify-content-end">
            <Nav>
              <Link to="/" className="nav-link c-white">Home</Link>
              <Link to="/about" className='nav-link'>About Us</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/products/new" className="nav-link">New Product</Link>
            </Nav>
          </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<ProductHome />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="products/new" element={<ProductForm />}>
          <Route path=":productId/edit" element={<ProductForm />}/>
        </Route>
        <Route path="about" element={<About />} />   
      </Routes>

      
      <footer style={{backgroundColor:'#000807', color:'#A2A3BB'}} className="footer">
        <div className="footer-copyright text-center py-3">
          © 2022 Purple Mango • Website Design by Stephanie Delgado  
        </div>
      </footer>  
      

    </BrowserRouter>

    
  )
    
}

export default App;
