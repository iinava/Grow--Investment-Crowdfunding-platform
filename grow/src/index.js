import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cursor from './components/Cursor';
import Gnavbar from './components/Gnavbar';
import Guesthome from './pages/Guest/Guesthome';
import Footer from './components/Footer/Footer';
import Startupreg from './pages/Startup/Startupreg';
import Investorreg from './pages/Investor/Investorreg';
import { Provider } from 'react-redux';
import { store } from './redux/Store/Store';
import Redtest from './pages/Redtest';
import Login from './pages/Guest/Login';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
    <App />
    {/* <Cursor/> */}  
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
