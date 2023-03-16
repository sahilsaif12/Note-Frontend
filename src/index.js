import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import NoteState from './context/notes/NoteState';


ReactDOM.render(
  <React.StrictMode>
  <NoteState>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </NoteState>
  </React.StrictMode>,
  document.getElementById('root')
);