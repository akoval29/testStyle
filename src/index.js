import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {Button} from './components/app/app';
import styled from 'styled-components';

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
  </React.StrictMode>,
  document.getElementById('root'),
);
