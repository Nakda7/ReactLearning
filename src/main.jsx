
import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstApp } from './firstApp'
import './styles.css'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <CounterApp value={77   }/>
  </React.StrictMode>
);
