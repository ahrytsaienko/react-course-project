// let titleStructure = {
//     title: 'Indecision app',
//     subtitle: 'Subtitle example',
// }

// let headerTemplate = (
//     <div>
//         <h1>{titleStructure.title}</h1>
//         <h2>{titleStructure.subtitle}</h2>
//     </div>
// );

//var header = document.getElementById('header');


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

var templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous'} </h1>
        {(user.age && user.age >=18) && <p>Age {user.age}</p>}
        {get_location(user.location)}
    </div>

);

var app = document.getElementById('app');

ReactDOM.render(templateTwo, header);
// ReactDOM.render(templateTwo, app)