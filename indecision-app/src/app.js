let titleStructure = {
    title: 'Indecision app',
    subtitle: 'Subtitle example',
}

let headerTemplate = (
    <div>
        <h1>{titleStructure.title}</h1>
        <h2>{titleStructure.subtitle}</h2>
    </div>
);

var header = document.getElementById('header');

ReactDOM.render(headerTemplate, header);