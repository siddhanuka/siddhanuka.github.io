import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import ViewMaster from './views/viewMaster'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (<BrowserRouter>
    <ViewMaster />
  </BrowserRouter>),
  document.getElementById('root'));
registerServiceWorker();
