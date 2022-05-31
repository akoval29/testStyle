import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";


const bootstrapTest = () => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
                </Col>
                
                <Col>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="http://www.rosphoto.com/images/u/articles/1510/7_5.jpg"
                        alt="First slide"
                        />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/blue-and-yellow-hot-air-balloons-in-flight-outdoor-colorful-picture-id466243150?k=20&m=466243150&s=170667a&w=0&h=6ATWZ44A4-VS5o_K36zIBCQ_iXUV2PqHbldlViZB82M="
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.championat.com/s/735x490/news/big/w/p/podruga-ronaldu-vylozhila-novoe-foto-ego-ocenil-kokorin_1595487833155279868.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default bootstrapTest;