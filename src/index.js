import * as serviceWorker from './serviceWorker';
import state from './components/redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updatePostText, subscribe } from './components/redux/state';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostText={updatePostText} />
        </React.StrictMode>,
        document.getElementById('root'));
}


rerenderEntireTree(state);

subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
