import {Container, Row, Col} from "react-bootstrap";

const bootstrapTest1 = (props) => {
  return (
    <Container className="mt-5 mb-5">
      <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>BootstrapTest1</h3>
      <Row>
        <Col>
          {props.left}
        </Col>

        <Col>
          {props.mid}
        </Col>                

        <Col>
          {props.right}
        </Col>
      </Row>
    </Container>
  )
}


export default bootstrapTest1;
