'use strict';

var head = {
    title: 'Indecision app',
    subtitle: 'Subtitle example'
};

var main = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        head.title
    ),
    get_header(head.subtitle),
    head.subtitle ? head.subtitle : 'No subtitle'
);

var header = document.getElementById('header');

function get_header(subtitle) {
    if (subtitle) {
        return React.createElement(
            'h2',
            null,
            subtitle
        );
    }
};

var user = {
    name: 'John',
    age: 26,
    location: 'Philadelphia'
};

function get_location(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name ? user.name : 'Anonymous',
        ' '
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age',
        user.age
    ),
    get_location(user.location)
);

var header = document.getElementById('header');
var app = document.getElementById('app');

ReactDOM.render(main, header);
ReactDOM.render(templateTwo, app);
// ReactDOM.render(templateTwo, app)
