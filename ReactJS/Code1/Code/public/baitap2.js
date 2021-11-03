var Bai2 = React.createClass({
    next() {
        this.state.linkanh = this.state.linkanh === 4 ? 4 : parseInt(this.state.linkanh) + 1;
        this.setState(this.state);
    },
    prev() {
        this.state.linkanh = this.state.linkanh === 1 ? 1 : parseInt(this.state.linkanh) - 1;
        this.setState(this.state);
    },
    getInitialState() {
        return {linkanh: 1};
    },
    render() {
        return (
            <div>
                <img src={"images/" + this.state.linkanh + ".png"} alt="Girl in a jacket" height="200"/>
                <hr/>
                <button onClick={this.prev}>Previous</button>
                <button onClick={this.next}>Next</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Bai2 />
    </div>,
    document.getElementById("root")
);
