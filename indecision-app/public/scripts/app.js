'use strict';

var el = document.getElementById('el');
var someData = '';

var onClickBtn = function onClickBtn() {

    if (someData) {
        someData = '';
    } else {
        someData = 'Hey There are some details';
    }
    render();
};

var render = function render() {

    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onClickBtn },
            someData.length > 0 ? 'Hidden' : 'Watch'
        ),
        React.createElement(
            'p',
            null,
            someData
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
