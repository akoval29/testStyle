import { Component } from 'react';
import styled from 'styled-components';
import './app.css';


const EmpItem = styled.div `
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

const Header = styled.h2 `
  font-size: 22px;
`;

export const Button = styled.button `
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, .2);
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

// Передача аргументів - Варіант № 1
function WhoAmI1 (props) {
  return (
    <div>
      <Header>My name is {props.name}, lastname - {props.lastname}</Header>
      <a href={props.link}>My profile</a>
    </div>
  )
}

// Передача аргументів - Варіант № 2 - деструктуризація
function WhoAmI2 ({name, lastname, link}) {
  return (
    <div>
      <h1>My name is {name}, lastname - {lastname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}

// Передача аргументів - Варіант № 3 - передали СВОЙСТВО ОБЄКТА
function WhoAmI3 ({name, lastname, link}) {
  return (
    <div>
      <h1>My name is {name.firstName}, lastname - {lastname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}

// Передача аргументів - Варіант № 4 - передали ФУНКЦІЮ
function WhoAmI4 ({name, lastname, link}) {
  return (
    <div>
      <h1>My name is {name()}, lastname - {lastname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}


// Класи

class WhoAmI5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      textPlus: "Plus 1",
      textMinus: "Minus 1",
      pos: "",
    }
    this.nextYear2 = this.nextYear2.bind(this);  //второй метод привязки контекста
  }

// setState - запускает перерисовку компонента
  nextYear = () => {
    this.setState({
      years: this.state.years +1
    })
  }

  // setState - запускает перерисовку компонента - второй и третий метод превязки контекста (разница в рендер-ретурне)
  nextYear2() {
    this.setState(state => ({
      years: this.state.years +1
    }))
  }

// а такой вариант для случаев когда надо подождать асинхрон от "какой-то" предыдущей операции над ЭТИМ стейтом
  prefYear = () => {
    this.setState(state => ({
      years: state.years -1
    }))
  }

  //событие инпута. передали в сетстейт обьект, изменили стейт.
  commitInputOnChanges = (e, color) => {
    console.log(color);
    console.log(e.target);
    console.log(e.target.value);
    this.setState({
      pos: e.target.value
    })
  }

  render() {
    const {name, lastname, link} = this.props;
    const {years, pos}= this.state;
    return (
      <EmpItem>
        {/* Первый метод привязки контекста*/}
        <Button onClick={this.nextYear} >{this.state.textPlus}</Button>
        <Button onClick={this.prefYear} >{this.state.textMinus}</Button>
        
        {/* Второй метод */}
        <Button onClick={this.nextYear2} >{this.state.textPlus}</Button>
        
        {/* Третий метод */}
        <Button onClick={() => this.nextYear2()} >{this.state.textPlus}</Button>

        <Header>My name is {name}, 
        lastname - {lastname}, 
        age - {years}, 
        input - {pos}</Header>
        <a href={link}>My profile</a>
        
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputOnChanges(e, 'some color')}/> 
        </form>
        {/* еще варианты = onChange - onClick - onSubmit - onInput */}
        {/* аргументы можна и не передавать, тогда будет:   <input type="text" onChange={this.commitInputOnChange}/>   */}
      </EmpItem>
    )
  }
}

const Wrapper = styled.div `
  width: 600px;
  margin: 80px auto 0 auto
`;

function App() {
  return (
    <Wrapper classname="App">
    <WhoAmI1 name="John" lastname="Smith" link="facebook.com"/>
    <WhoAmI2 name="Vin" lastname="Diesel" link="facebook.com"/>
    <WhoAmI3 name={{firstName: "Part of"}} lastname="Object" link="facebook.com"/>
    <WhoAmI4 name={() => {return "Function here !!!!!"}} lastname="realy!" link="facebook.com"/>
    <WhoAmI5 name="we use classes!!!" lastname="here!!" link="facebook.com"/>
  </Wrapper>
  );
}
export default App;