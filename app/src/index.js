import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FeedBackForm from './FeedBackForm';
import { ContextProvider } from './Context';
import {BrowserRouter,Routes,Route}  from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>  
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/feedback" element={<FeedBackForm/>}/>
    </Routes>
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// create content createcontext and usecontext 