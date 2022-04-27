import { Container, Row, Col } from "react-bootstrap"
import React from "react"

function About() {
    return (
        <div style={{backgroundColor: '#B2ABBF'}}>
            <Container>
                <Row>
                    <Col style={{ padding: '25px'}}>
                        <h1>&nbsp;About Us</h1>
                    </Col>
                </Row>  
                <Row>
                    <Col style={{paddingBottom: '57px'}}>
                        <img 
                        alt=""
                        src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80"
                        width="700"
                        height="500"    
                        />
                    </Col>
                    <Col>
                        <h2>Welcome!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue quisque egestas diam in arcu cursus euismod. Sit amet volutpat consequat mauris nunc congue nisi. Vitae sapien pellentesque habitant morbi. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Varius morbi enim nunc faucibus. Id diam vel quam elementum pulvinar etiam non quam lacus. Justo nec ultrices dui sapien. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Arcu risus quis varius quam quisque. Eu scelerisque felis imperdiet proin fermentum. Cras pulvinar mattis nunc sed blandit libero volutpat. Arcu dictum varius duis at consectetur lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Mauris a diam maecenas sed enim ut sem. Quam pellentesque nec nam aliquam. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About