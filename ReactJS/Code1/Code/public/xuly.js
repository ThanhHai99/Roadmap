var getName = function(name) {
    alert(name);
};

var ThanhHai = React.createClass({
    addStudent() {
        this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
        this.setState(this.state);
    },
    layThongTin: function() {
        alert("internal object");
    },
    getInitialState() {
        return {tongHocVien: this.props.tongHocVien};
    },
    render: function() {
        return (
            <div>
                <h1 className="mauvang">{this.props.ten}</h1>
                <h1>{this.props.giangvien}</h1>
                <h1>So hoc vien: {this.state.tongHocVien}</h1>
                <p>{this.props.children}</p>
                <button onClick={this.layThongTin}>Thong tin</button>
                <button onClick={() => getName(`${this.props.ten} - ${this.props.children}`)}>Lay Ten</button>
                <button onClick={this.addStudent}>Them hoc vien</button>
                <KhoaHoc />
            </div>
        );
    }
});

var KhoaHoc = React.createClass({
    render: function() {
        return (
            <h3>Lap trinh</h3>
        );
    }
});

var InputTag = React.createClass({
    showTxt(){
        var text = this.refs.txt.value;
        alert(text);
    },
    showSelect() {
        var text = this.refs.sl.value;
        alert(text);
    },
    render() {
        return (
            <div>
                <select ref="sl">
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                </select>
                <button onClick={this.showSelect}>Hien thi select</button>
                <input type="text" ref="txt"/>
                <button onClick={this.showTxt}>Hien thi text</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <InputTag />
        <ThanhHai ten="NodeJS" giangvien="Hai" tongHocVien="10">text</ThanhHai>
        <ThanhHai ten="ReactJS" giangvien="Ngan" tongHocVien="20">text</ThanhHai>
    </div>,
    document.getElementById("root")
);
