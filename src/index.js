import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Button} from './components/app/app';
import styled from 'styled-components';

// import './index.css';
import './index.scss';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;

`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button>Імпортована кнопка з app.js</Button>
    <BigButton>Змінена шляхом наслідування + додаткові параметри index.js</BigButton>
  </React.StrictMode>,
  document.getElementById('root'),
);
