var Bai1 = React.createClass({
    tangLen() {
        this.state.so = parseInt(this.state.so) + 1;
        this.setState(this.state);
    },
    getInitialState() {
        return {so: 0};
    },
    render() {
        return (
            <div>
                <button onClick={this.tangLen}>Hello {this.state.so}</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Bai1 />
    </div>,
    document.getElementById("root")
);
