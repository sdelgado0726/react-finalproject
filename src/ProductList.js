import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"
import { Card, Button, Row, Col } from 'react-bootstrap'
import { ProductContext } from './ProductContext'
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from 'react'

function ProductList() {

    let params = useParams()
    let navigate = useNavigate()

    let { getProduct, deleteProduct } = useContext(ProductContext)
    let [ product, setProduct ] = useState()

    useEffect(() => {
        async function fetch() {
          await getProduct(params.productId)
            .then((product) => setProduct(product))
        }
        fetch()
    }, [params.productId, getProduct])

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }

    function productGroup(products) {

        // if (products === null) return
        // return products.map((product) =>
            
        // <Card key={product.id} style={{ width: '18rem', padding: '15px', margin: '20px', textAlign: 'left' }}>
        //     <Card.Img variant="top" src={product.imageUrl} className="card-img-top"/>
        //     <Card.Body>
        //         <span><Card.Title>{product.productName}</Card.Title></span>
        //         <span><Card.Subtitle>${product.price}</Card.Subtitle></span>
        //         <div className='text-center'>
        //             <Link to={`/products/${product.id}`} className="btn btn-secondary text me-2">View</Link>
        //             <Link to={`/products/new/${product.id}/edit`} className="btn btn-primary text me-2">Edit</Link>
        //             <Button variant="danger" >Delete</Button>
        //         </div>
        //     </Card.Body>
        // </Card>) 
        return (
            <Row xs={1} md={2} lg={3} className="g-5 mx-5">
            {products.map((product) => (
                <Col>
                <Card key={product.id} style={{width: '18rem', padding: '15px', margin: 'auto', textAlign: 'left', marginBottom: '8px', marginTop:'0.5px', paddingBottom: '2px', backgroundColor: '#F5F1E3'}}>
                    <Card.Img variant="top" src={product.imageUrl} className="card-img-top"/>
                    <Card.Body>
                    <span><Card.Title>{product.productName}</Card.Title></span>
                    <span><Card.Subtitle>${product.price}</Card.Subtitle></span><br/>
                    <div>
                        <Link to={`/products/${product.id}`} className="btn btn-secondary text me-2" style={{backgroundColor: '#7C9299', color: 'white'}}>View</Link>
                        <Link to={`/products/new/${product.id}/edit`} className="btn btn-primary text me-2" style={{backgroundColor: '#A2A3BB', color: '#000807'}}>Edit</Link>
                        <Button style={{backgroundColor: '#000807', color: '#A2A3BB'}} onClick={handleDeleteProduct.bind(this, product.id)}>Delete</Button>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        )
          
    }

  return (
        <>
            <h1 style={{padding: '8px', backgroundColor: '#B2ABBF', margin: 'auto'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Products</h1>
            <Stack direction="horizontal" gap={3} style={{backgroundColor: '#B2ABBF'}}>
                <ProductContext.Consumer>
                    {({products}) =>
                    productGroup(products)
                    }
                </ProductContext.Consumer>
                <Outlet />
            </Stack>

        </>
    
    )
}

export default ProductList