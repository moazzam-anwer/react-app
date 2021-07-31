import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import "./reduxstore/store"
import { Provider } from 'react-redux';
import mystore from "./reduxstore/store"

import axios from "axios"

export var shailesh = axios.create()





shailesh.interceptors.request.use((request)=>{
  alert("...")
  request.headers["authtoken"] = localStorage.token
  return request
 
})

// axios.interceptors.response.use((response)=>{
//   alert("response")

//   return response
// })


ReactDOM.render(
    <Provider store={mystore}>
            <App />
    </Provider>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
