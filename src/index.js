import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductsProvider from './context/ProductsContext';
import FiltersProvider from './context/FiltersContext';
import CartProvider from './context/CartContext';
import UserProvider from './context/UsersContext';
import {Auth0Provider} from "@auth0/auth0-react";
// dev-5msl6n2b.us.auth0.com
// K7topW6aySjjIaZ3z0zBFKtfMsBBAf8N

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FiltersProvider>
            <CartProvider >
              <App />
            </CartProvider>
          </FiltersProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);


