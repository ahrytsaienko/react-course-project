class ToggleVisiblity extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggleVisibility}>Toogle data</button>
                {this.state.visibility && (
                    <div>
                        <h3>Toogle toogle toogle</h3>
                    </div>
                )}
            </div>
        )
    }

};

ReactDOM.render(<ToggleVisiblity />, document.getElementById('app'));

// const el = document.getElementById('el');
// let visibility = false;

// const onToggleVisibility = () => {

//     visibility = !visibility;
//     render();
// };

// const render = () => {

//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && (
//                 <div>
//                     <p>Some detail</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();





