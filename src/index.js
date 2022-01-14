import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Overview} from "./pages/1-Overview";
import  {Portfolio}  from "./pages/3-ProjectPage";
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/profil" element={<Portfolio />} />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
