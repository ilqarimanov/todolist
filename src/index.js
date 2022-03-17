import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css'
import App from './App';
import { TodoLayer } from './context/TodoContext';
import reducer, {initialState} from './context/reducer'



ReactDOM.render(
    <React.StrictMode>
        <TodoLayer initialState={initialState} reducer={reducer}>
            <App/>
        </TodoLayer>
    </React.StrictMode>
    , document.getElementById('root'));


