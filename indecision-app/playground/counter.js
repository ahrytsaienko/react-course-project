class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        
    }

    handleAddOne(e) {
        console.log('add one clicked');
    };

    handleMinusOne(e) {
        console.log('minus one clicked');
    };

    handleReset(e) {
        console.log('reset clicked');
    };

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset button</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));




// let count = 0;

// const addOne = () => {
//     count++;
//     showCount();
//     renderCount();
// };

// const minusOne = () => {
//     count--;
//     showCount()
//     renderCount();
// };

// const reset = () => {
//     count = 0;
//     showCount();
//     renderCount();
// };

// const showCount = () => {
//     console.log(`count: ${count}`);
// };

// const btnOne = document.getElementById('btnOne');

// const renderCount = () => {

//     const templatebtnOne = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset button</button>
//         </div>
//     );

//     ReactDOM.render(templatebtnOne, btnOne);

// };

// renderCount();   