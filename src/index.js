import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import { ProductoProvider } from './context/ProductoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserProvider>
            <CarritoProvider>
                <ProductoProvider>
                    <App />
                </ProductoProvider>
            </CarritoProvider>
        </UserProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
