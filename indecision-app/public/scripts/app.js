'use strict';

var count = 0;

var addOne = function addOne() {
    count++;
    showCount();
    renderCount();
};

var minusOne = function minusOne() {
    count--;
    showCount();
    renderCount();
};

var reset = function reset() {
    count = 0;
    showCount();
    renderCount();
};

var showCount = function showCount() {
    console.log('count: ' + count);
};

var btnOne = document.getElementById('btnOne');

var renderCount = function renderCount() {

    var templatebtnOne = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            'First button'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            'Second button'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset button'
        )
    );

    ReactDOM.render(templatebtnOne, btnOne);
};

renderCount();
