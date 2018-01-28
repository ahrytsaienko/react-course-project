const el = document.getElementById('el');
let someData = '';

const onClickBtn = () => {

    if (someData) {
        someData = '';
    } else {
        someData = 'Hey There are some details';
    }
    render();
};

const render = () => {

    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onClickBtn}>{someData.length >0 ? 'Hidden' : 'Watch'}</button>
            <p>{someData}</p>
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();





