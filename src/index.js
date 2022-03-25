import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ModalProvider } from './context/modal';
import { EditProvider } from './context/edit';
import App from './App';
import './index.css';


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <EditProvider>
        <ModalProvider>
          <Router>
            <App />
          </Router>
        </ModalProvider>
      </EditProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

