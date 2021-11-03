var Bai3 = React.createClass({
    changeImage() {
        this.state.linkanh = this.state.linkanh === 4 ? 1 : parseInt(this.state.linkanh) + 1;
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
    },
    componentDidMount() { // hàm được chạy sau khi render
        setInterval(this.changeImage, 1000);
    }
});

ReactDOM.render(
    <div>
        <Bai3 />
    </div>,
    document.getElementById("root")
);
