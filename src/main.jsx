import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from './store/store.js';
import { UseContextProvider } from './components/hooks/UseContext.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </UseContextProvider>
  </React.StrictMode>
);
