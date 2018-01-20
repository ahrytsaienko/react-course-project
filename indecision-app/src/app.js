console.log('app.js is running')

// JSX - javascript XML
let template = (
    <div>
        <h1>Indecision App</h1>
        <p>Some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let someTemplate = (
    <div>
        <h1>Some element</h1>
        <p>test1</p>
        <p>test2</p>
    </div>
);

let appRoot = document.getElementById('app');
let secondApp = document.getElementById('app_second');

ReactDOM.render(template, appRoot);
ReactDOM.render(someTemplate, secondApp);