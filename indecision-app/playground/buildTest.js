const el = document.getElementById('el');
let visibility = false;

const onToggleVisibility = () => {

    visibility = !visibility;
    render();
};

const render = () => {

    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <div>
                    <p>Some detail</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();





