'use strict';

var el = document.getElementById('el');
var visibility = false;

var onToggleVisibility = function onToggleVisibility() {

    visibility = !visibility;
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
            { onClick: onToggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Some detail'
            )
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
