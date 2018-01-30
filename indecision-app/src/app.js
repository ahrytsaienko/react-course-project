class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);

        this.state = {
            options: ['Thing one', 'thing two', 'thing four', 'thing five']
        }
    }

    //handleDeleteOptions
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    //handlePickOption
    handlePickOption(prevState) {
        return alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]) 
    }

    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
};

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePickOption}>
                    What should I do?
                </button>
            </div>
        )
    }
};

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all buttons</button>
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
            </div>

        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
};

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const addOption = e.target.elements.option.value;

        if (addOption) {
            alert("Option exist!");
        }

    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));