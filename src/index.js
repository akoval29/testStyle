import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';  // стилі bootstrap
import {Button} from './app';
import BootstrapTest from './bootstraptest';
import Counter1 from './counter';
import PortalExport from './Portal';

import './index.scss';
import RefForm from './refForm';
import UseRefTest from './useRefTest';
import FormMyHoock from './MyHoocks';
import NewFeaturesHook from '../src/transition_deferedVal-test/App'

const BigButton = styled(Button)` //щоб це працювало був імпорт styled
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <Button>Імпортована кнопка з app.js</Button>
    <BigButton>Змінена шляхом наслідування + додаткові параметри index.js</BigButton>
    <BigButton as='a'>перетворили кнопку в ссилку</BigButton>
    <App/>
    <BootstrapTest />
    <Counter1/>
    <RefForm/>
    <PortalExport/>
    <UseRefTest/>
    <FormMyHoock/>
    <NewFeaturesHook/>
  </React.StrictMode>,
  document.getElementById('root'),
);
