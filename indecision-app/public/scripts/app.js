console.log('app.js is running')

// JSX - javascript XML
let template = <p> This is JS from app.js</p>;
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);