//stateless functional compontent


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this)

        this.state = {
            options: props.options
        }
    }

    //lifecicle method (only available in classes)
    componentDidMount(){
        (console.log('fetching data')); 
    }

    componentDidUpdate(prevProps, prevState){
        (console.log('saving data'));
    }

    componentWillUnmount() {
        (console.log ('unMount'));
    }

    //handleDeleteOptions
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    //handlePickOption
    handlePickOption(prevState) {
        return alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return `This option ${option} already exists`
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }

    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// };

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePickOption}>
                What should I do?
            </button>
        </div>
    )
};

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     disabled={!this.props.hasOptions}
//                     onClick={this.props.handlePickOption}>
//                     What should I do?
//                 </button>
//             </div>
//         )
//     }
// };

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all buttons</button>
            {props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
            }
        </div>
    );
}

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove all buttons</button>
//                 {this.props.options.map((option) => <Option key={option} optionText={option} />)}
//             </div>

//         );
//     }
// }


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    )
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Option: {this.props.optionText}
//             </div>
//         )
//     }
// };

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }))

    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

// functional statemant compontent 
// (doesn't have access to "this", need to use arguments)
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: </p>
//         </div>
//     );
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// ReactDOM.render(<User name='John' />, document.getElementById('app'));