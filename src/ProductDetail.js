import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext, useState, useEffect } from 'react'
import { ProductContext } from './ProductContext'
import {Col, Row, Spinner} from "react-bootstrap";


function ProductDetail() {

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

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" /></div>
    }

    function productDetails() {
        let {id, productName, description, color, price, imageUrl} = product
        return (
            <div style= {{backgroundColor: '#B2ABBF'}}>
                <Row xs={1} md={2} lg={3}>
                    <Col>
                        <h1 style={{padding: '15px'}}>&nbsp;Product Detail</h1>
                        <Card  style={{ width: '18rem', padding: '15px', margin: '20px', textAlign: 'left', paddingBottom: '2px', backgroundColor: '#F5F1E3' }}>
                            <Card.Img variant="top" src={imageUrl} className="card-img-top"/>
                            <Card.Body>
                                <Card.Title>{productName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
                                <Card.Text>
                                    <strong>Description: </strong> <span>{description}</span>
                                </Card.Text>
                                <Card.Text>
                                    <strong>Color: </strong><span>{color}</span>
                                </Card.Text>
                                <Link to={`/products/new/${id}/edit`} className="btn btn-primary ml-auto me-1" style={{backgroundColor: '#A2A3BB', color: '#000807'}}>Edit</Link>
                                <Button style={{backgroundColor: '#000807', color: '#A2A3BB'}} className="ml-auto" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={3}>
                    <Col style= {{backgroundColor: '#B2ABBF'}}>
                    
                    </Col>
                </Row>
            </div>
               
        )          
    }

    if (product === undefined) return loading()
    return product.id !== parseInt(params.productId) ? loading() : productDetails()
}

export default ProductDetail