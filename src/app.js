import React from 'react';
import {Component } from 'react';
import styled from 'styled-components';
import './app.css';

import BootstrapTest1 from './bootstraptest1';

const EmpItem = styled.div `
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
  a {  //це було використано в index.js
    display: block;
    margin: 10px 0 10px 0;
    color: ${props=> props.active ? 'orange' : 'black'};
  }
  input {
    display: block;
    margin-top: 10px;
  }
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
    <div className={'mb-3 p-3 border'}>
      <h5>Передача аргументів № 1</h5>
      <Header>Name - {props.name}, lastname - {props.lastname}</Header>
      <a href={props.link}>Link</a>
    </div>
  )
}

// Передача аргументів - Варіант № 2 - деструктуризація
function WhoAmI2 ({name, lastname, link}) {
  return (
    <div className={'mb-3 p-3 border'}>
      <h5>№2: деструктуризація</h5>
      <h3>Name - {name}, lastname - {lastname}</h3>
      <a href={link}>Link</a>
    </div>
  )
}

// Передача аргументів - Варіант № 3 - передали СВОЙСТВО ОБЄКТА
function WhoAmI3 ({name, lastname, link}) {
  return (
    <div className={'mb-3 p-3 border'}>
      <h5>№3: передача свойства обєкта</h5>
      <h3>Name - {name.firstName}, lastname - {lastname}</h3>
      <a href={link}>Link</a>
    </div>
  )
}

// Передача аргументів - Варіант № 4 - передали ФУНКЦІЮ
function WhoAmI4 ({name, lastname, link}) {
  return (
    <div className={'mb-3 p-3 border'}>
      <h5>№4: передача функції</h5>
      <h3>Name - {name()}, lastname - {lastname}</h3>
      <a href={link}>Link</a>
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
      <EmpItem active>
        <h5>№5: Застосовано класи та стилі</h5>
        {/* Первый метод привязки контекста*/}
        <Button onClick={this.nextYear} >{this.state.textPlus}</Button>
        <Button onClick={this.prefYear} >{this.state.textMinus}</Button>
        
        {/* Второй метод */}
        <Button onClick={this.nextYear2} >{this.state.textPlus}</Button>
        
        {/* Третий метод */}
        <Button onClick={() => this.nextYear2()} >{this.state.textPlus}</Button>

        <Header>Name - {name}, 
        lastname - {lastname}, 
        age - {years}, 
        input - {pos}</Header>
        <a href={link}>My profile</a>
        
        <form>
          <span>Введіть сюди</span>
          <input type="text" onChange={(e) => this.commitInputOnChanges(e, 'some color')}/> 
        </form>
        {/* еще варианты = onChange - onClick - onSubmit - onInput */}
        {/* аргументы можна и не передавать, тогда будет:   <input type="text" onChange={this.commitInputOnChange}/>*/}
      </EmpItem>
    )
  }
}

const Wrapper = styled.div `
  width: 600px;
  margin: 80px auto 0 auto
`;

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {props.children} 
    </div>
  )
}

const DynamicGreating1 = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
        })
      }
    </div>
  )
}

const HelloGreating = () => {
  return (
    <div style={{'width':'900px', 'margin': '0 auto'}}>
      <DynamicGreating color={'primary'}>
        <h2>приклад наслідування</h2>
        <h2>від children.props + інші стилі</h2>
      </DynamicGreating>
    </div>
  )
}

function App() {
  return (
    <Wrapper>
    <DynamicGreating color={'primary'}>
      <h2>its children</h2>
      <h2>props</h2>
    </DynamicGreating>

    <HelloGreating/>

    <DynamicGreating1 color={'primary'}>
      <h2>children props styled by</h2>
      <h2>"cloneElement" and "map"</h2>
    </DynamicGreating1>

    <WhoAmI1 name="John" lastname="Smith" link="facebook.com"/>
    <WhoAmI2 name="Alex" lastname="Shepard" link="facebook.com"/>
    <WhoAmI3 name={{firstName: "Ice"}} lastname="Cube" link="facebook.com"/>
    <WhoAmI4 name={() => {return "Ben"}} lastname="Kox" link="facebook.com"/>
    <WhoAmI5 name="Sam" lastname="Miller" link="facebook.com"/>

    <BootstrapTest1
    left = {
        <DynamicGreating color={'primary'}>
          <h4>LEFT COL</h4>
        </DynamicGreating>
      }
    mid = {
        <DynamicGreating color={'primary'}>
          <h4>MID COL</h4>
        </DynamicGreating>
      }
    right = {
        <DynamicGreating color={'primary'}>
          <h4>RIGHT COL</h4>
        </DynamicGreating>
      }
    />
    </Wrapper>
  );
}
export default App;