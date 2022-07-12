import {useRef, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './app.css';

const Form = () => {
    const [text, setText] = useState('');

    const myRef = useRef(1);

    // useEffect (() => {
    //     myRef.current++;  //рахуєм кількість рендерів (повязано з textera, розкоментуй)
    //     console.log(myRef.current);
    // })    

    useEffect (() => {
        myRef.current = text;  //запамятовуєм попередній "стейт типу" (повязано з textera, розкоментуй)
        
    })

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <div className='mb-3'> Тест Рефів </div>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={(e) => setText(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    {/* <textarea onClick={() => myRef.current++} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
                    <textarea value={myRef.current} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
    
}

function UseRefTest() {
    return (
        <Form/>
    );
}

export default UseRefTest;
