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

const fnBtnOne = () => { console.log("TheOne") };
const fnBtnTwo = () => console.log("TheTwoo");

// const templateTwo = (
//     // <div>
//     //     <h1> {user.name ? user.name : 'Anonymous'} </h1>
//     //     {(user.age && user.age >= 18) && <p>Age{user.age}</p>}
//     //     {get_location(user.location)}
//     //</div>

//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//     </div>

// );

const templatebtnOne = (
    <div>
        <button onClick={fnBtnOne}>First button</button>
        <button onClick={fnBtnTwo}>Second button</button>
        </div>
);

const templateTwo = (
    <div>
    <button onClick={fnBtnTwo}>Second button</button>    
    </div>
);


const header = document.getElementById('header');
const app = document.getElementById('app');
const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');


ReactDOM.render(main, header);
ReactDOM.render(templatebtnOne, btnOne);
ReactDOM.render(templateTwo, btnTwo)
