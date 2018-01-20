'use strict';

console.log('app.js is running');

// JSX - javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'Some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var someTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Some element'
    ),
    React.createElement(
        'p',
        null,
        'test1'
    ),
    React.createElement(
        'p',
        null,
        'test2'
    )
);

var appRoot = document.getElementById('app');
var secondApp = document.getElementById('app_second');

ReactDOM.render(template, appRoot);
ReactDOM.render(someTemplate, secondApp);
