'use strict';

var titleStructure = {
    title: 'Indecision app',
    subtitle: 'Subtitle example'
};

var headerTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        titleStructure.title
    ),
    React.createElement(
        'h2',
        null,
        titleStructure.subtitle
    )
);

var header = document.getElementById('header');

ReactDOM.render(headerTemplate, header);
