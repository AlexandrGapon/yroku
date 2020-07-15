import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {name:'Ulya', id:'1'},
  {name:'Mama', id:'2'},
  {name:'Papa', id:'3'},
  {name:'Ptichki', id:'4'},
  {name:'Nyamnyam', id:'5'}
];

let messages = [
  {id:1, message:'Hello'},
  {id:2, message:'Titi'},
  {id:3, message:'BadyaBadya'},
  {id:4, message:'TayTay'},
]

let posts = [
  {id:1, message:'Hello, world!', likeCount:15},
  {id:2, message:'It\'s my first post', likeCount:43},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs = {dialogs} messages = {messages} posts = {posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
