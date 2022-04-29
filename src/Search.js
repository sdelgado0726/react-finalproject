import { Link } from "react-router-dom"
import { Card, Button, Row, Col } from 'react-bootstrap'
import { ProductContext } from './ProductContext'
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from 'react'



const Search = () => {

    let params = useParams();

    let { filterResult } = useContext(ProductContext);
    let [products, setProduct] = useState([]);

    useEffect(() => {
        async function fetch() {
        console.log(params.search);
          await filterResult(params.search)
            .then((response) => {
                console.log(response)
                setProduct(response)
            })
        }
        fetch()
    }, [params, filterResult])


    return (
        <div style={{backgroundColor: '#B2ABBF', paddingTop: '50px', paddingBottom:'80px'}}>

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
                        <Button style={{backgroundColor: '#000807', color: '#A2A3BB'}} >Delete</Button>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>

        </div>
    )
}


export default Search;




 

