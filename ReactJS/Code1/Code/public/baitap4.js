var Item = React.createClass({
    render() {
        return (
            <h1>{this.props.children}</h1>
        );
    }
});

var List = React.createClass({
    add() {
        this.state.mang.push("I am Java", "I am C#");
        this.setState(this.state);
    },
    getInitialState() {
        return {mang: ["I am NodeJS", "I am ReactJS", "I am VueJS"]};
    },
    render() {
        return (
            <div>
                <button onClick={this.add}>Them</button>
                {
                    this.state.mang.map(function(note, index) {
                        return <Item key={index}>{note}</Item>
                    })
                }
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <List />
    </div>,
    document.getElementById("root")
);
