'use strict';

// let titleStructure = {
//     title: 'Indecision app',
//     subtitle: 'Subtitle example',
// }

// let headerTemplate = (
//     <div>
//         <h1>{titleStructure.title}</h1>
//         <h2>{titleStructure.subtitle}</h2>
//     </div>
// );

//var header = document.getElementById('header');


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
        'Age ',
        user.age
    ),
    get_location(user.location)
);

var app = document.getElementById('app');

ReactDOM.render(templateTwo, header);
// ReactDOM.render(templateTwo, app)
