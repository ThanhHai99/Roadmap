var list;
var Item = React.createClass({
    edit() {
        this.setState({onEdit: true});
    },
    getInitialState() {
        return {onEdit: false}
    },
    delete() {
        $.post("/delete", {idXoa: this.props.id}, function(data) {
            list.setState({mang: data});
        });
    },
    save() {
        var that = this;
        $.post("/update", {idSua: this.props.id, noiDung: this.refs.txt.value}, function(data) {
            list.setState({mang: data});
            that.setState({onEdit: false});
        });
    },
    cancel() {
        this.setState({onEdit: false});
    },
    render() {
        if (this.state.onEdit === true) {
            return (
                <div className="div-note">
                    <input defaultValue={this.props.children} ref="txt" />
                    <button onClick={this.save}>Lưu</button>
                    <button onClick={this.cancel}>Hủy</button>
                </div>
            );
        } else {
            return (
                <div className="div-note">
                    <p>{this.props.children}</p>
                    <button onClick={this.delete}>Xóa</button>
                    <button onClick={this.edit}>Sửa</button>
                </div>
            );
        };
    }
});

function addDiv(){
    ReactDOM.render(<InputDiv/>, document.getElementById("add"));
};

var List = React.createClass({
    getInitialState() {
        list = this;
        return {mang: []}
    },
    render() {
        return (
            <div className="div-list">
                <div id="add"></div>
                <button onClick={addDiv}>Thêm</button>
                {
                    this.state.mang.map(function(note, index) {
                        return <Item key={index} id={index}>{note}</Item>;
                    })
                }
            </div>
        );
    },
    componentDidMount() {
        var that = this;
        $.post("/getNotes", data => {
            that.setState({mang: data});
        });
    }
});

var InputDiv = React.createClass({
    send() {
        $.post("/addNote", {note: this.refs.txt.value}, function(data) {
            list.setState({mang: data});
        });
        ReactDOM.unmountComponentAtNode(document.getElementById("add"));
    },
    render() {
        return (
            <div>
                <input type="text" ref="txt" placeholder="Enter your note!" />
                <button onClick={this.send}> Gửi </button>
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
