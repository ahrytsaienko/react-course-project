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

var count = 0;
var addOne = function addOne() {
    console.log("click here");
};

var fnBtnOne = function fnBtnOne() {
    console.log("TheOne");
};
var fnBtnTwo = function fnBtnTwo() {
    return console.log("TheTwoo");
};

// const templateTwo = (
//     // <div>
//     //     <h1> {user.name ? user.name : 'Anonymous'} </h1>
//     //     {(user.age && user.age >= 18) && <p>Age{user.age}</p>}
//     //     {get_location(user.location)}
//     //</div>

//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//     </div>

// );

var templatebtnOne = React.createElement(
    'div',
    null,
    React.createElement(
        'button',
        { onClick: fnBtnOne },
        'First button'
    ),
    React.createElement(
        'button',
        { onClick: fnBtnTwo },
        'Second button'
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'button',
        { onClick: fnBtnTwo },
        'Second button'
    )
);

var header = document.getElementById('header');
var app = document.getElementById('app');
var btnOne = document.getElementById('btnOne');
var btnTwo = document.getElementById('btnTwo');

ReactDOM.render(main, header);
ReactDOM.render(templatebtnOne, btnOne);
ReactDOM.render(templateTwo, btnTwo);
