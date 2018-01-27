let head = {
    title: 'Indecision app',
    subtitle: 'Subtitle example',
}

let main = (
    <div>
        <h1>{head.title}</h1>
        {get_header(head.subtitle)}
        {(head.subtitle ? head.subtitle : 'No subtitle')}
    </div>
);

var header = document.getElementById('header');

function get_header(subtitle) {
    if (subtitle) {
        return <h2>{subtitle}</h2>
    }
};

var user = {
    name: 'John',
    age: 26,
    location: 'Philadelphia'
};

function get_location(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
};

let count = 0;
const addOne = () => {
    console.log("click here");
};
const templateTwo = (
    // <div>
    //     <h1> {user.name ? user.name : 'Anonymous'} </h1>
    //     {(user.age && user.age >= 18) && <p>Age{user.age}</p>}
    //     {get_location(user.location)}
    //</div>

    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
    </div>

);

var header = document.getElementById('header');
var app = document.getElementById('app');

ReactDOM.render(main, header);
ReactDOM.render(templateTwo, app);
