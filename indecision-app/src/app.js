class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in hands of a computer';
        const options = ['Thing one', 'thing two', 'thing four'];


        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
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
                <button>What should I do?</button>
            </div>
        )
    }
};

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <p key={option}>{option}</p>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Some option
            </div>
        )
    }
};

class AddOption extends React.Component {
    render() {
        return (
            <div>
                Add options here
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));