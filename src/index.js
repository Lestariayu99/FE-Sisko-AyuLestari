import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, // Anda harus menutup React.StrictMode dengan tanda koma
  document.getElementById('root')
);

// Jika Anda ingin mengukur kinerja aplikasi Anda, Anda dapat menggunakan reportWebVitals
// dengan cara seperti ini:
reportWebVitals(console.log);
