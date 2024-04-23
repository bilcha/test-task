import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import '../src/css/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/test-task">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
