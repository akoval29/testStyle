import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './app.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <div className='mb-3'> Тест Рефів - автофокус </div>
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input ref={this.myRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </Container>
    )
  }
}

function RefForm() {
  return (
    <Form/>
  );
}

export default RefForm;
