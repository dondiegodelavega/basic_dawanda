import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Signup from './pages/Signup/Signup';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Signup />, document.getElementById('root'));
registerServiceWorker();
