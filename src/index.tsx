// import 'react-app-polyfill/ie11'; // 需要时打开
import 'react-app-polyfill/stable'; // 根据 browserlist import
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'amfe-flexible';
import reportWebVitals from './reportWebVitals';

const renderApp = (): void => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", renderApp);
}

renderApp();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
