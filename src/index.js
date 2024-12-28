import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import './styles/index.scss';
import App from './App';

const bodyContainer = document.getElementById("root");
const root = ReactDOM.createRoot(bodyContainer);
root.render(<App />);