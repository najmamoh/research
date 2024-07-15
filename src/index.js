import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter,Router ,Route} from 'react-router-dom'

ReactDOM.render(
  // <BrowserRouter>
  <React.StrictMode>
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
    </React.StrictMode>,
document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
