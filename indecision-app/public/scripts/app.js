'use strict';

console.log('app.js is running');

// JSX - javascript XML
var template = React.createElement(
  'p',
  null,
  ' This is JS from app.js'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
