
import {useState} from 'react';
import {Container} from 'react-bootstrap';
import './app.css';

// Валідація текста на предмет ЦИФР в ньому (рівень - нуб)
// const validate = (text) => {
//   if (text.search(/\d/) >= 0) {
//     return true
//   } else {
//     return false
//   }
// }
// const color = validate(text) ? 'text-danger' : null

// Валідація тексту на пердмет ЦИФР в ньому (рівень - продвинутий)
// const validate = (text) => {
//   return text.search(/\d/) >= 0 ? true : false
// }
// const color = validate(text) ? 'text-danger' : null

// Валідація тексту на пердмет ЦИФР в ньому (рівень - ідеально)
// const validate = (text) => {
//   return text.search(/\d/) >= 0 // тут boolean
// }
// const color = validate(text) ? 'text-danger' : null


// Мега-валідатор
function useInputWithValidate (initValue) {
  const [value, setValue] = useState(initValue);

  const onChange = e => {
    setValue(e.target.value);
  }

  const validate = () => {
    return value.search(/\d/) >= 0 // тут boolean
  }

  // return {value: value, onChange: onChange}   // нижче скорочений варіант
  return {value, onChange, validate}
}



const Form = () => {
  // const [text, setText] = useState('');
  // const [textArea, setTextArea] = useState('');

  const input = useInputWithValidate('');
  const textArea = useInputWithValidate('');

  const color = input.validate() ? 'text-danger' : null

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          {/* <input value={`${text} / ${textArea}`} type="text" className="form-control" readOnly/> */}
          <input value={`${input.value} / ${textArea.value}`} type="text" className="form-control" readOnly/>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
          
          <input 
            // onChange={(e) => setText(e.target.value)} 
            onChange={input.onChange}
            type="email" 
            // value = {text}
            value={input.value}
            className={`form-control ${color}` }
            id="exampleFormControlInput1" 
            placeholder="name@example.com"/>
          
          </div>
          <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          
          <textarea 
            // onChange={e => setTextArea(e.target.value)}
            onChange={textArea.onChange}
            value={textArea.value}
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3">
          </textarea>

        </div>
      </form>
    </Container>
  )
}

function FormMyHoock() {
  return (
    <Form/>
  );
}

export default FormMyHoock;