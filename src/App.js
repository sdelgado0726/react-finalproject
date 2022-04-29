import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import ProductHome from "./ProductHome";
import ProductForm from "./ProductForm";
import About from "./About";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Search from "./Search";
import Home from "./Home";


function App() {

  return (
    
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ProductHome />}/>
          <Route path="products" element={<ProductList />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path=":search/searchCom" element={<Search />} />
          <Route path="products/new" element={<ProductForm />}>
            <Route path=":productId/edit" element={<ProductForm />} />
          </Route>
          <Route path="about" element={<About />} /> 
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;





      





         
          