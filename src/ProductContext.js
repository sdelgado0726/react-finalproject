import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
        await refreshProducts()
    }
        getProducts()
    }, []);

    function refreshProducts() {
        return axios.get("http://localhost:3000/products")
        .then(response => {
            setProducts(response.data)
        })
    } 

    function getProduct(id) {
        return axios.get(`http://localhost:3000/products/${id}`)
            .then(response =>
                new Promise((resolve) => resolve(response.data))
            )
    }

    function deleteProduct(id) {
        axios.delete(`http://localhost:3000/products/${id}`)
        .then(refreshProducts)
    }

    function addProduct(product) {
        return axios.post("http://localhost:3000/products", product)
        .then(response => {
          refreshProducts()
          return new Promise((resolve) => resolve(response.data))
        })
    }

    function updateProduct(product) {
        return axios.put(`http://localhost:3000/products/${product.id}`, product)
        .then(response => {
          refreshProducts()
          return new Promise((resolve) => resolve(response.data))
        })
    }

    return (
        <ProductContext.Provider
        value={{
            products,
            getProduct,
            deleteProduct,
            addProduct,
            updateProduct
        }}
        >
        {props.children}
        </ProductContext.Provider>
    )
}