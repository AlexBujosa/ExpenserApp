import React from 'react';
import ReactDom from 'react-dom/client';
import { App } from './app';
const root = document.getElementById('root');
const rootApp = ReactDom.createRoot(root);
rootApp.render(<App/>)