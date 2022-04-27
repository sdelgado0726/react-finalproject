import { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from './ProductContext'
import { useEffect } from 'react';

function ProductForm() {
    let params = useParams()
    let [ product, setProduct ] = useState({
      id: params.productId,
      productName: "",
      description: "",
      color: "",
      price: 0,
      imageUrl: ""
    })
  
    let { getProduct, addProduct, updateProduct } = useContext(ProductContext)
    let navigate = useNavigate()
    let { id, productName, description, color, price, imageUrl } = product
  
    useEffect(() => {
      if (id === undefined) return
      async function fetch() {
        await getProduct(id)
          .then((product) => setProduct(product))
        }
        fetch()
    },  [id, getProduct])
  
    function handleChange(event) {
      setProduct((preValue) => {
        return { ...preValue, [event.target.name]: event.target.value }})
    }
  
    function addOrUpdate() {
      if (id === undefined) {
        return addProduct(product)
      } else {
        return updateProduct(product)
      }
    }
  
    function handleSubmit(event) {
      event.preventDefault()
      addOrUpdate().then((product) =>
        navigate(`/products/${product.id}`)
      )
    }
  
    return (
      <>
      <h1 style={{padding: '20px', backgroundColor: '#B2ABBF', margin:'auto'}}>&nbsp;&nbsp;&nbsp;&nbsp;Create New Product</h1>
      <Form onSubmit={handleSubmit} style={{padding: '55px', paddingLeft: '60px', paddingRight: '60px', backgroundColor: '#B2ABBF'}}>
        <Form.Group className="mb-3" >
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name="productName" value={productName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" value={description} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" name="color" value={color} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" name="price" value={price} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="text" name="imgUrl" value={imageUrl} placeholder="type an image URL" onChange={handleChange} />
        </Form.Group>
        <Button type="submit" style={{backgroundColor: '#000807', color: '#A2A3BB'}}>Save</Button>
      </Form>
      </>
    )
}
  
export default ProductForm