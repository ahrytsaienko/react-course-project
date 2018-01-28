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

const onRemoveAll = (e) => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');
const numbers = [55, 101, 1000];

const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            {
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>;
                })
            }
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>Options: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
            <button onClick={onRemoveAll}>Remove all</button>
        </div>
    );

    ReactDOM.render(template, appRoot);

};

render();




