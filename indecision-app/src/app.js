const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    };
    render();
};

const removeAll = (e) => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');

const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
            <button onClick={removeAll}>Remove all</button>
        </div>
    );

    ReactDOM.render(template, appRoot);

};

render();




