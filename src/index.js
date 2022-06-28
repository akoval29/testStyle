import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import {Button} from './app';

import BootstrapTest from './bootstraptest';

import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';  // стилі bootstrap

// import './index.css';
import './index.scss';

const BigButton = styled(Button)` //щоб це працювало був імпорт styled
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button>Імпортована кнопка з app.js</Button>
    <BigButton>Змінена шляхом наслідування + додаткові параметри index.js</BigButton>
    <BigButton as='a'>перетворили кнопку в ссилку</BigButton>
    <BootstrapTest />
  </React.StrictMode>,
  document.getElementById('root'),
);
