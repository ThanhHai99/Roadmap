var Item = React.createClass({
    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
                <img src={this.props.src} height="200px" />
            </div>
        );
    }
});

var List = React.createClass({
    add() {
        this.state.mang.unshift({ srcHinh: "images/4.png", noiDung: "I am VueJS" });
        this.setState(this.state);
    },
    getInitialState() {
        return {mang: [
            { srcHinh: "images/1.png", noiDung: "I am NodeJS" },
            { srcHinh: "images/2.png", noiDung: "I am ReactJS" }
        ]};
    },
    render() {
        return (
            <div>
                <button onClick={this.add}>Them</button>
                {
                    this.state.mang.map(function(note, index) {
                        return <Item key={index} src={note.srcHinh}>{note.noiDung}</Item>
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
