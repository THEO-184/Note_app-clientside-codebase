import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import {
    QueryClientProvider,
    QueryClient,
} from '@tanstack/react-query';
=======
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
>>>>>>> b8a57b80755f21a2a6f71bcfb2bef489f19e5b9d
// local imports
import App from './App';
import './index.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
